import { MComponents } from "../MUIExporter";
import QuantityManager from "./QuantityManager";
const CartItem = (props) => {
  return (
    <MComponents.Card sx={{ my: 2 }}>
      <MComponents.CardContent>
        <MComponents.Grid container alignItems="center">
          <MComponents.Grid item md={4} xs={12} sm={12}>
            <MComponents.Stack spacing={1}>
              <MComponents.Typography variant="h6">
                {props.name}
              </MComponents.Typography>
              <MComponents.Typography variant="caption">
                By Brand
              </MComponents.Typography>
              <MComponents.Typography variant="body1" color="error.main">
                ${props.price}
              </MComponents.Typography>
            </MComponents.Stack>
          </MComponents.Grid>
          <MComponents.Grid item md={4} xs={12} sm={12}>
            <MComponents.Typography variant="overline">
              Qty
            </MComponents.Typography>
            <QuantityManager quantity={props.quantity} id={props.id} />
          </MComponents.Grid>
          <MComponents.Grid item md={4} xs={12} sm={12}>
            <MComponents.Stack>
              <MComponents.Typography variant="overline">
                Total
              </MComponents.Typography>
              <MComponents.Button variant="outlined" size="small">
                ${props.quantity * props.price}
              </MComponents.Button>
            </MComponents.Stack>
          </MComponents.Grid>
        </MComponents.Grid>
      </MComponents.CardContent>
    </MComponents.Card>
  );
};
export default CartItem;
