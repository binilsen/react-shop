import { Link } from "react-router-dom";
import { MComponents, Icons } from "../MUIExporter";
const CartAction = () => {
  return (
    <MComponents.Grid container marginY={1}>
      <MComponents.Grid item sm={12} xs={12} md={6}>
        <MComponents.Button variant="contained" component={Link} to="/cart">
          <Icons.ArrowBackIos /> Edit Cart
        </MComponents.Button>
      </MComponents.Grid>
      <MComponents.Grid item sm={12} xs={12} md={6} textAlign="right">
        <MComponents.Button variant="contained" color="secondary" component={Link} to="/order-success">
          Place Order
          <Icons.ArrowForwardIos />
        </MComponents.Button>
      </MComponents.Grid>
    </MComponents.Grid>
  );
};
export default CartAction;
