import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import UserImage from "../../../assets/user.svg";

const UserCard = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className="row border shadow-lg p-4 rounded-4 m-3 ">
      <div className="col-sm-2">
        <div className="p-2 text-center">
          <img
            src={UserImage}
            className="img  img-fluid shadow rounded-pill"
            width="100px"
            height="100px"
          />
        </div>
      </div>
      <div className="col-sm-6 text-center">
        <h6 className="mb-2 border-bottom">Account Details</h6>
        <div className="my-3 row">
          <div className="col-sm-6">
            <p className="lead">Customer ID:</p>
          </div>
          <div className="col-sm-6">
            <p className="lead">{authCtx.userId}</p>
          </div>
        </div>
        <div className="my-3 row">
          <div className="col-sm-6">
            <p className="lead">Email:</p>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-outline-danger">{authCtx.username}</button>
          </div>
        </div>
      </div>
      <div className="col-sm-4 text-center">
        <h6 className="mb-2  border-bottom">Quick Links</h6>
        <div className="d-flex flex-column h-100">
          <div>
            <Link to="orders" className="btn btn-danger mx-2">My Orders</Link>
            {/* <%= link_to "My Orders" ,user_orders_path(current_user.id), className: "btn mx-2 btn-danger" %> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
