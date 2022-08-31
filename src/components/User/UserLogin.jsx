import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import GoogleAuth from "./../UI/GoogleAuth";
import AuthContext from "./../../store/auth-context";
import CartContext from "../../store/cart-context";
import addValidationClass from "./../Utilites/addValidationClass";
const UserForm = () => {
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const [formError, setFormError] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  var [isPasswordValid, isEmailValid] = [false, false];
  const emailChangeHandler = () => {
    if (emailRef.current.value != "" && emailRef.current.validity.valid)
      isEmailValid = addValidationClass(emailRef);
    else isEmailValid = addValidationClass(emailRef, false);
  };
  const passwordChangeHandler = () => {
    if (passwordRef.current.value.length >= 6)
      isPasswordValid = addValidationClass(passwordRef);
    else isPasswordValid = addValidationClass(passwordRef, false);
  };
  const formHandler = async (event) => {
    event.preventDefault();
    passwordChangeHandler();
    emailChangeHandler();
    const formValidity = isEmailValid && isPasswordValid;
    if (!formValidity) return setFormError("Invalid form entry");
    const formData = new FormData();
    formData.append("user[email]", emailRef.current.value);
    formData.append("user[password]", passwordRef.current.value);
    await fetch("http://127.0.0.1:3000/api/users/sign_in", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        let data = response.json();
        if (response.ok) {
          data.then((content) => {
            console.log(response.headers.get("authorization"));
            authCtx.onLogin({
              token: response.headers.get("authorization"),
              username: content.user.email,
              id: content.user.id,
            });
            cartCtx.cartUpdate(content.cart);
            authCtx.setStatus("Successfully logged in.");
            return navigate(`/users/${authCtx.userId}`, { replace: true });
          });
        }
        data.then((e) => setFormError(e.error));
      })
      .catch((e) => authCtx.setStatus(e.message));
  };
  return (
    <>
      <h2 className="text-center">Login</h2>
      {formError && (
        <div className="alert text-center fw-bold text-capitalize alert-danger">
          {formError}
        </div>
      )}
      <form action="#" onSubmit={formHandler} noValidate>
        <Input
          name="email"
          type="email"
          placeholder="email"
          onChange={emailChangeHandler}
          ref={emailRef}
          error="Invalid email."
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
          onChange={passwordChangeHandler}
          error="Invalid Password."
        />
        <div className="text-center my-2">
          <button type="submit" className=" btn btn-dark">
            Login
          </button>
        </div>
      </form>
      <GoogleAuth />
    </>
  );
};

export default UserForm;
