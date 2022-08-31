import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Cookies from "js-cookie";
const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = async () => {
    const response = await fetch("http://127.0.0.1:3000/api/users/sign_out", {
      method: "DELETE",
      headers: {
        authorization: Cookies.get("authToken"),
      },
    });
    authCtx.setStatus("Logged out successfully");
    authCtx.onLogout();
    if (response.ok) {
      return navigate("/", { replace: true });
    }
    authCtx.setStatus("Error occurred");
  };
  const isLoginValid = Cookies.get("authToken") || authCtx.isLoggedIn;
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light shadow p-3 bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Rails Shop
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 fw-bold">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              {isLoginValid && (
                <li className="nav-item">
                  <Link to="cart" className="nav-link">
                    Cart
                  </Link>
                </li>
              )}

              {isLoginValid && (
                <li className="nav-item">
                  <Link to={`/users/${authCtx.userId}`} className="nav-link">
                    My Account
                  </Link>
                </li>
              )}
              {isLoginValid && (
                <li className="nav-item">
                  <button onClick={logoutHandler} className="btn btn-danger">
                    Logout
                  </button>
                </li>
              )}
              {!isLoginValid && (
                <li className="nav-item">
                  <Link to="/user/register" className="nav-link">
                    Register
                  </Link>
                </li>
              )}
              {!isLoginValid && (
                <li className="nav-item">
                  <Link to="/user/login" className="nav-link">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
