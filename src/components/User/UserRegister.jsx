import { useContext, useRef, useState } from "react";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input";
import GoogleAuth from "../UI/GoogleAuth";
import { useNavigate } from "react-router-dom";
const UserRegister = () => {
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const formRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  var [isEmailValid, isPasswordValid, isConfirmPasswordValid] = [
    false,
    false,
    false,
  ];
  const formHandler = async (event) => {
    event.preventDefault();
    emailChangeHandler() || passwordChangeHandler() || passwordConfirmHandler();
    const formValidity =
      isEmailValid && isPasswordValid && isConfirmPasswordValid;
    if (!formValidity) return authCtx.setStatus("Invalid form entry");
    const formData = new FormData();
    formData.append("user[email]", emailRef.current.value);
    formData.append("user[password]", passwordRef.current.value);
    formData.append(
      "user[password_confirmation]",
      confirmPasswordRef.current.value
    );
    await fetch("http://127.0.0.1:3000/api/users", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        let data = response.json();
        data.then((content) => {
          if (response.ok) {
            authCtx.onLogin({
              token: response.headers.get("Authorization"),
              username: content.email,
            });
            authCtx.setStatus("Registration Successful.");
            formRef.current.reset();
            return navigate("/profile", { replace: true });
          }
        });

        data.then((e) => {
          var error = Object.entries(e.errors);
          error = String(error[0]);
          authCtx.setStatus(error);
        });
      })
      .catch((e) => authCtx.setStatus("Server error"));
  };
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
  const passwordConfirmHandler = () => {
    if (
      passwordRef.current.value === confirmPasswordRef.current.value &&
      confirmPasswordRef.current.value.length >= 6
    )
      isConfirmPasswordValid = addValidationClass(confirmPasswordRef);
    else isConfirmPasswordValid = addValidationClass(confirmPasswordRef, false);
  };
  return (
    <>
      <h2 className="text-center">Register</h2>
      <form action="#" noValidate onSubmit={formHandler} ref={formRef}>
        <Input
          name="email"
          type="email"
          placeholder="email"
          ref={emailRef}
          onChange={emailChangeHandler}
          error="Invalid email."
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
          onChange={passwordChangeHandler}
          error="Password need to be atleast 6 character long."
        />
        <Input
          name="password"
          type="password"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
          onChange={passwordConfirmHandler}
          error="Password doesn't match."
        />
        <div className="text-center my-2">
          <button type="submit" className=" btn btn-dark">
            Register
          </button>
        </div>
      </form>
      <GoogleAuth />
    </>
  );
};
export default UserRegister;
