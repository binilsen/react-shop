import Cookies from "js-cookie";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "./../../../store/auth-context";
import OrderItemList from "./OrderItemList";
import priceFormater from "../../Utilites/priceFormater";
import useFetchData from "./../../../hooks/useFetchData";
import dateFormater from "./../../Utilites/dateFormater";
import Loader from "./../../Utilites/Loader";
const Order = (props) => {
  const authCtx = useContext(AuthContext);
  const params = useParams();
  const { isLoading, apiData, serverError } = useFetchData({
    url: `http://127.0.0.1:3000/api/v1/users/${authCtx.userId}/orders/${params.orderId}`,
    token: Cookies.get("authToken"),
  });
  return (
    <>
      {serverError && authCtx.setStatus("Error occurred")}
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="min-vh-100 container">
          <h2 className="mt-4 fw-light">Order Details</h2>
          <hr />
          <div className="row   p-2">
            <div className="col-sm-6 border-bottom">
              <div className="row">
                <p className="col-sm-6">Order id:</p>
                <p className="col-sm-6 lead  rounded text-center">
                  {apiData && apiData.order.id}
                </p>
              </div>
              <div className="row">
                <p className="col-sm-6">Ordered date:</p>
                <p className="col-sm-6 lead text-center">
                  {apiData && dateFormater(apiData.order.created_at)}
                </p>
              </div>
            </div>
            <div className="col-sm-6 border-bottom">
              <div className="row ">
                <p className="col-sm-6">Status:</p>
                <p className="col-sm-6 bg-danger text-light rounded text-center">
                  Processing
                </p>
              </div>
              <div className="row ">
                <p className="col-sm-6">Order Total:</p>
                <p className="col-sm-6 lead text-center border p-2 border-info rounded shadow fw-bold">
                  {apiData && priceFormater(apiData.order.total)}
                </p>
              </div>
            </div>
          </div>
          <h3 className="mt-4 fw-light">Items in this order</h3>
          <hr />
          {apiData && (
            <OrderItemList
              products={apiData.order.products}
              orderDetails={apiData.order.orders_products}
              total={apiData.order.total}
            />
          )}
        </div>
      )}
    </>
  );
};
export default Order;
