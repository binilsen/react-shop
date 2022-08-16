import { useRef } from "react";
import Input from "./../UI/Input";

const UserForm = (props) => {
  const isLogin = props.login;
  const emailRef = useRef();
  const passwordRef = useRef();
  const formHandler = (event) => {
    event.preventDefault();
    const user = [emailRef.current.value, passwordRef.current.value];
    props.onFormSubmit(user);
  };
  return (
    <>
      <h2 className="text-center">Login</h2>
      <form action="#" onSubmit={formHandler}>
        <Input name="email" type="email" placeholder="email" ref={emailRef} />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
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
