import { Link } from "react-router-dom";
import { MComponents } from "../MUIExporter";
import emptyCart from "../../assets/empty-cart.svg";
const CartEmpty = () => {
  return (
    <MComponents.Box p={4} sx={{ textAlign:'left', background: `url(${emptyCart}) center no-repeat`,backgroundSize:'contain',height:"100vh" }}>
      <MComponents.Typography variant="h4" width="50%" my={2} textAlign="left">Hmm..strange no items in your cart</MComponents.Typography>
      <MComponents.Button
        variant="contained"
        size="large"
        color="secondary"
        component={Link}
        to="/"
      >
        Shop now
      </MComponents.Button>
    </MComponents.Box>
  );
};
export default CartEmpty;
