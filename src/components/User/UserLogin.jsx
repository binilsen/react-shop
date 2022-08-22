import { useContext, useRef, useState } from "react";
import Input from "../UI/Input";
import AuthContext from "./../../store/auth-context";
import { useNavigate } from "react-router-dom";
const UserForm = () => {
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [formError, setFormError] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  var [isPasswordValid, isEmailValid] = [false, false];
  const emailChangeHandler = () => {
    if (emailRef.current.value != "" && emailRef.current.validity.valid) {
      emailRef.current.classList.add("is-valid");
      emailRef.current.classList.remove("is-invalid");
      isEmailValid = true;
    } else emailRef.current.classList.add("is-invalid");
  };
  const passwordChangeHandler = () => {
    if (passwordRef.current.value.length >= 6) {
      passwordRef.current.classList.add("is-valid");
      passwordRef.current.classList.remove("is-invalid");
      isPasswordValid = true;
    } else passwordRef.current.classList.add("is-invalid");
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
    await fetch("http://127.0.0.1:3000/users/sign_in", {
      method: "POST",
      body: formData,
    }).then((response) => {
      let data = response.json();
      if (response.ok) {
        data.then((content) => {
          console.log(content.image);
          authCtx.onLogin({
            token: response.headers.get("Authorization"),
            userImage: content.image,
            username: content.username,
          });
          authCtx.setStatus("Successfully logged in.");
          return navigate("/profile", { replace: true });
        });
      }
      data.then((e) => setFormError(e.error));
    });
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
            login
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
