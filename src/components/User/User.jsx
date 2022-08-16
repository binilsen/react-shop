import { useRef, useState } from "react";
import Toggle from "../UI/Toggle";
import UserLogin from "./UserForm";
import Token from "./Token";
const User = () => {
  const [isLoggedin, setisLoggedin] = useState(false);
  const formHandler = (user) => {
    console.log(user);
    setisLoggedin(true);
  };
  return (
    <>
      <Toggle />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 bg-light shadow rounded">
            <div className="d-flex h-100 p-2 flex-column  justify-content-center">
              {!isLoggedin && <UserLogin onFormSubmit={formHandler} />}
              {isLoggedin && <Token token="hello here is the token" />}
              {isLoggedin && (
                <button
                  className="btn btn-outline-dark"
                  onClick={() => setisLoggedin(false)}
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
