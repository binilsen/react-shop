import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MComponents, Backdrop } from "../MUIExporter";
import { setCart } from "../../store/slices/cartSlice";
import axios from "axios";
import Cookies from "js-cookie";
const QuantityManager = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.authReducer.userId);
  const [quantity, setQuantity] = useState(props.quantity);
  const [loading, setLoading] = useState(false);
  const [isRemove, setIsremove] = useState(false);
  const quantityHandler = (add = true) => {
    const url = `http://127.0.0.1:3000/api/v1/carts/${userId}/process_carts/${
      props.id
    }/${add ? "add" : "remove"}`;
    setLoading(true);
    axios
      .get(url, {
        headers: {
          authorization: Cookies.get("rails-token"),
        },
      })
      .then((response) => {
        response.data.remove ? setIsremove(true) : setIsremove(false);
        dispatch(
          setCart({
            cartId: response.data.cart._id.$oid,
            cartTotal: response.data.cart.total,
            carts_products: response.data.products,
          })
        );
        setQuantity(response.data.product.quantity);
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      <MComponents.Stack direction="row" spacing={1} alignItems="center">
        <MComponents.Button
          variant="contained"
          size="small"
          onClick={() => quantityHandler(false)}
        >
          -
        </MComponents.Button>
        <MComponents.Typography variant="body1">
          {quantity}
        </MComponents.Typography>
        <MComponents.Button
          variant="contained"
          size="small"
          onClick={quantityHandler}
        >
          +
        </MComponents.Button>
      </MComponents.Stack>
      {loading && <Backdrop open={loading} />}
    </>
  );
};

export default QuantityManager;
