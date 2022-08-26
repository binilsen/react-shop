import Cookies from "js-cookie";
import { useContext } from "react";
import AuthContext from "./../../store/auth-context";
import CartContext from "./../../store/cart-context";
import CartItem from "./CartItem";
import { useNavigate, Link } from "react-router-dom";
import gstCalculator from "./../Utilites/gstCalcualor";
import priceFormater from "./../Utilites/priceFormater";
const Cart = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const orderHandler = async () => {
    const response = await fetch(
      `http://127.0.0.1:3000/carts/${cartCtx.cart.id}/place_order`,
      {
        headers: {
          authorization: Cookies.get("authToken"),
        },
      }
    );
    if (response.ok) {
      navigate("/", { replace: true });
      cartCtx.cartUpdate(null);
      authCtx.setStatus("Order Placed !");
    } else authCtx.setStatus("Error Occurred");
  };
  return (
    <>
      {authCtx.isLoggedIn &&
        cartCtx.cart &&
        cartCtx.cart.carts_products.length != 0 && (
          <div className="container my-4">
            <h3 className="fs-3 shadow rounded p-2 bg-danger text-white text-center mt border-bottom">
              Cart Items
            </h3>
            <table className="table  table-hover">
              <thead className="text-center">
                <th className="text-start">Items</th>
                <th>Weight</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Total</th>
              </thead>

              <tbody>
                {cartCtx.cart &&
                  cartCtx.cart.carts_products.map((cartItem) => (
                    <CartItem
                      product={cartCtx.cart.products.filter((product) => {
                        if (product.id == cartItem.product_id) return product;
                      })}
                      itemDetails={cartItem}
                    />
                  ))}

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center bg-dark text-light">Total:</td>
                  <td className="text-center">
                    {cartCtx.cart &&
                      priceFormater(
                        cartCtx.cart.cart_total -
                          gstCalculator(cartCtx.cart.cart_total)
                      )}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center  bg-dark text-light">GST:</td>
                  <td className="text-center">
                    +{" "}
                    <span>
                      {cartCtx.cart &&
                        priceFormater(gstCalculator(cartCtx.cart.cart_total))}
                    </span>
                  </td>
                </tr>
                <tr className="bg-light  text-center">
                  <th className="text-start">Total to pay</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center">
                    {cartCtx.cart && priceFormater(cartCtx.cart.cart_total)}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center my-4">
              <button className="btn btn-outline-dark" onClick={orderHandler}>
                Place Order
              </button>
            </div>
          </div>
        )}
      <div className="text-center my-3">
        <Link to="/" className="btn btn-outline-danger">
          Continue Shopping
        </Link>
      </div>
    </>
  );
};
export default Cart;
