import { useContext, useRef } from "react";
import Input from "../UI/Input";
import addValidationClass from "./../Utilites/Validation";
import AuthContext from "./../../store/auth-context";
import { useNavigate } from "react-router-dom";
const UserForm = () => {
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);
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
    if (!formValidity) return authCtx.setStatus("Invalid form entry");
    const formData = new FormData();
    formData.append("user[email]", emailRef.current.value);
    formData.append("user[password]", passwordRef.current.value);
    await fetch("http://127.0.0.1:3000/users/sign_in", {
      method: "POST",
      body: formData,
    }).then((response) => {
      let data = response.json();
      if (response.ok) {
        data.then((content) => {
          authCtx.onLogin({
            token: response.headers.get("Authorization"),
            userImage: content.image,
            username: content.username,
          });
          authCtx.setStatus("Successfully logged in.");
          return navigate("/profile", { replace: true });
        });
      }
      data.then((e) => authCtx.setStatus(e.error));
    });
  };
  return (
    <>
      <h2 className="text-center">Login</h2>
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
            login
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
