import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
const User = () => {
  const userNavigate = useParams();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    userNavigate.page === "login" ? setIsLogin(true) : setIsLogin(false);
  }, [userNavigate]);
  return (
    <>
      <div className="container my-4">
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
