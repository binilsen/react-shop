import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
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
            <Link to="user" className="btn btn-dark btn-lg">
              Token
            </Link>
            <Link to="profile" className=" mx-2 btn btn-dark btn-lg">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
