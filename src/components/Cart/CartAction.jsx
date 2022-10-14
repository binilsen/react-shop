import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MComponents, Icons, Backdrop } from "../MUIExporter";
import { setStatus } from "../../store/slices/statusSlice";
import { setCart } from "../../store/slices/cartSlice";
import { useState } from "react";
import Cookies from "js-cookie";
const CartAction = (props) => {
  const navigate = useNavigate();
  const cartId = useSelector((state) => state.cartReducer.cartId);
  const buyNowproduct = useSelector((state) => state.buyNowreducer);
  const [isProcessing, setIsprocessing] = useState(false);
  const dispatch = useDispatch();
  const orderHandler = () => {
    const data = {
      order: {
        address: props.address._id.$oid,
        product: buyNowproduct.product,
      },
    };
    setIsprocessing(true);
    axios
      .post(
        `http://127.0.0.1:3000/api/v1/carts/${cartId || "buy-now"}/place_order`,
        data,
        {
          headers: {
            authorization: Cookies.get("rails-token"),
          },
        }
      )
      .then((response) => {
        dispatch(
          setCart({
            cartId: null,
            cartTotal: null,
            carts_products: null,
          })
        );
        navigate(`/order-success/${response.data.order_id.$oid}`, {
          replace: true,
        });
      })
      .catch((e) =>
        dispatch(
          setStatus({
            message: "Unable to process this order.Try again later",
            type: "error",
          })
        )
      )
      .finally((e) => setIsprocessing(false));
  };
  return (
    <>
      <MComponents.Grid container marginY={1}>
        <MComponents.Grid item sm={12} xs={12} md={6}>
          <MComponents.Button variant="contained" component={Link} to="/cart">
            <Icons.ArrowBackIos /> Edit Cart
          </MComponents.Button>
        </MComponents.Grid>
        <MComponents.Grid item sm={12} xs={12} md={6} textAlign="right">
          <MComponents.Button
            variant="contained"
            color="secondary"
            onClick={orderHandler}
          >
            Place Order
            <Icons.ArrowForwardIos />
          </MComponents.Button>
        </MComponents.Grid>
      </MComponents.Grid>
      {isProcessing && <Backdrop open={isProcessing} />}
    </>
  );
};
export default CartAction;
