import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const isLoginValid = localStorage.getItem("login_valid");
  return (
    <div className={`p-3 mb-3 ${styles.nav}  rounded shadow-lg`}>
      <div className="row align-items-center">
        <div className="col-sm-6">
          <Link to="/" className="text-reset">
            <h1 className="display-3">React Shop</h1>
          </Link>
        </div>
        <div className="col-sm-6">
          <div className="d-flex justify-content-md-end">
            {!isLoginValid && (
              <Link to="user" className="btn btn-dark btn-lg">
                Account
              </Link>
            )}
            {isLoginValid && (
              <button
                onClick={authCtx.onLogout}
                className=" mx-2 btn btn-dark btn-lg"
              >
                Logout
              </button>
            )}
            {isLoginValid && (
              <button className=" mx-2 btn btn-dark btn-lg">
                <Link to="profile" className="text-reset text-decoration-none">
                  Profile
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
