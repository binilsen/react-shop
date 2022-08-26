import Cookies from "js-cookie";
import { useContext } from "react";
import AuthContext from "./../../../store/auth-context";
import OrderList from "./OrderList";
import Loader from "./../../Utilites/Loader";
import useFetchData from "./../../../hooks/useFetchData";
const UserOrders = () => {
  const authCtx = useContext(AuthContext);
  const { isLoading, apiData, serverError } = useFetchData({
    url: `http://127.0.0.1:3000/users/${authCtx.userId}/orders`,
    token: Cookies.get("authToken"),
  });
  authCtx.setStatus(serverError);
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="container">
          <h2 className="fw-light">Recent Order</h2>
          <hr className="my-1" />
          <table className="table table-hover table-striped">
            <thead className="bg-dark text-center text-white">
              <tr>
                <th>Order id</th>
                <th>Order date</th>
                <th>Order Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {apiData && <OrderList orders={apiData} />}
            </tbody>
          </table>
          <hr />
        </div>
      )}
    </>
  );
};
export default UserOrders;
