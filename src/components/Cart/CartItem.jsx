import Cookies from "js-cookie";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import CartContext from "../../store/cart-context";
import priceFormater from "../Utilites/priceFormater";

const CartItem = (props) => {
  const productId = props.product[0].id;
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const addProductHandler = async () => {
    await fetch(`http://127.0.0.1:3000/api/v1/products/${productId}/add`, {
      method: "POST",
      headers: {
        authorization: Cookies.get("authToken"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        cartCtx.cartUpdate(data.cart);
      })
      .catch((e) => authCtx.setStatus(e));
  };
  const removeProductHandler = async () => {
    await fetch(`http://127.0.0.1:3000/api/v1/products/${productId}/remove`, {
      method: "POST",
      headers: {
        authorization: Cookies.get("authToken"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        cartCtx.cartUpdate(data.cart);
      })
      .catch((e) => authCtx.setStatus(e));
  };
  return (
    <tr>
      <td className="bg-secondary text-light">
        {props.product[0].product_name}
      </td>
      <td className="text-center text-uppercase">
        {props.product[0].product_weight} {props.product[0].unit.symbol}
      </td>
      <td className="text-center">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <button
              onClick={removeProductHandler}
              className="btn btn-outline-dark mx-2 d-inline-block"
            >
              -
            </button>
            {props.itemDetails.product_quantity}
            <button
              onClick={addProductHandler}
              className="btn btn-outline-dark mx-2 d-inline-block"
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td className="text-center">
        {priceFormater(props.product[0].product_price)}
      </td>
      <td className="text-center">
        {priceFormater(
          props.product[0].product_price * props.itemDetails.product_quantity
        )}
      </td>
    </tr>
  );
};
export default CartItem;
