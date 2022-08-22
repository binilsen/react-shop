import { useState } from "react";
import Toggle from "../UI/Toggle";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
const User = () => {
  const [isLogin, setIsLogin] = useState();
  const toggleHandler = (value) => {
    setIsLogin(value);
  };
  return (
    <>
      <Toggle onToggle={toggleHandler} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 bg-light shadow rounded">
            <div className="d-flex h-100 p-2 flex-column  justify-content-center">
              {isLogin && <UserLogin />}
              {!isLogin && <UserRegister />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
