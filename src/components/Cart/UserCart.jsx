import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Icons, MComponents } from "../MUIExporter";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import PostOrder from "./PostOrder";
import Loader from "../Utilites/Loader";
import CartEmpty from "./Empty";
const UserCart = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(null);
  const [isCartempty, setIscartEmpty] = useState(false);
  useEffect(() => {
    if (cartState.cartId)
      axios
        .get(`http://127.0.0.1:3000/api/v1/carts/${cartState.cartId}`, {
          headers: {
            authorization: Cookies.get("rails-token"),
          },
        })
        .then((response) => {
          response.data.length == 0 ? setIscartEmpty(true) : null;
          setCart(response.data);
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    else {
      setLoading(false);
      setIscartEmpty(true);
    }
  }, [cartState]);

  return (
    <MComponents.Container maxWidth="lg" sx={{ p: 1, my: 2 }}>
      <MComponents.Paper sx={{ p: 1 }} elevation={10}>
        {loading && <Loader />}
        {(isCartempty || !cartState.carts_products) && <CartEmpty />}
        {!loading && cart && !isCartempty && (
          <MComponents.Grid container>
            <MComponents.Grid
              item
              sm={12}
              md={9}
              sx={{
                borderBottom: { sm: "1px solid black", md: "none" },
                borderRight: { sm: "none", md: "1px solid black" },
                height: "500px",
              }}
              padding={1}
              overflow="auto"
            >
              <MComponents.Stack
                direction="row"
                alignItems="center"
                spacing={1}
                borderBottom={1}
              >
                <Icons.ShoppingCart />
                <MComponents.Typography variant="h5">
                  Cart Items
                </MComponents.Typography>
              </MComponents.Stack>
              {cart &&
                cart.map((item) => (
                  <CartItem
                    id={item.product._id.$oid}
                    name={item.product.name}
                    price={item.product.price}
                    quantity={item.quantity}
                    subtotal={item.subtotal}
                  />
                ))}
            </MComponents.Grid>
            <MComponents.Grid item md={3} sm={12} padding={1}>
              <CartTotal />
              <PostOrder />
            </MComponents.Grid>
          </MComponents.Grid>
        )}
      </MComponents.Paper>
    </MComponents.Container>
  );
};

export default UserCart;
