import { MComponents, Icons,Backdrop } from "../MUIExporter";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setCart } from "../../store/slices/cartSlice";
const ProductActions = (props) => {
  const authState = useSelector((state) => state.authReducer);
  const cartState = useSelector((state) => state.cartReducer);
  const [product, setProduct] = useState(null);
  const [processing, setProcessing] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (authState.isLoggedIn) {
      setProduct(
        cartState.carts_products.find(
          (item) => props.id == item.product_id.$oid
        )
      );
    }
  }, []);
  const addProductHandler = (id) => {
    setProcessing(true);
    axios
      .get(
        `http://127.0.0.1:3000/api/v1/carts/${authState.userId}/process_carts/${props.id}/add`,
        {
          headers: {
            Authorization: Cookies.get("rails-token"),
          },
        }
      )
      .then((response) => {
        dispatch(
          setCart({
            cartId: response.data.cart._id.$oid,
            cartTotal: response.data.cart.total,
            carts_products: response.data.products,
          })
        );
        setProduct(response.data.product);
      })
      .finally(() => setProcessing(false));
  };
  return (
    <>
      {!authState.isLoggedIn && (
        <MComponents.Button variant="contained" fullWidth>
          Add to cart
        </MComponents.Button>
      )}
      {authState.isLoggedIn && (
        <MComponents.Stack direction="row" justifyContent="space-between">
          {product && (
            <MComponents.Button
              variant="contained"
              sx={{
                bgcolor: "secondary.main",
                color: "primary.dark",
                ":hover": {
                  color: "white",
                },
              }}
              size="small"
            >
              <Icons.Remove />
            </MComponents.Button>
          )}
          {product && (
            <MComponents.Button variant="text" size="small">
              <MComponents.Badge
                badgeContent={product.quantity}
                color="secondary"
                overlap="rectangular"
              >
                <Icons.ShoppingCart />
              </MComponents.Badge>
            </MComponents.Button>
          )}

          <MComponents.Button
            variant="contained"
            sx={{
              bgcolor: "secondary.main",
              color: "primary.dark",
              ":hover": {
                color: "white",
              },
            }}
            size="small"
            onClick={addProductHandler}
          >
            <Icons.Add />
          </MComponents.Button>
        </MComponents.Stack>
      )}
      {processing && <Backdrop open={processing} />}
    </>
  );
};
export default ProductActions;
