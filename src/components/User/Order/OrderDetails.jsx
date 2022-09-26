import { MComponents } from "../../MUIExporter";
import OrderItems from "./OrderItems";
const OrderDetails = () => {
  return (
    <>
      <MComponents.Typography variant="overline">
        Order Details
      </MComponents.Typography>

      <MComponents.Grid container alignItems="center">
        <MComponents.Grid item sm={12} md={3}>
          <MComponents.Typography>Ordered on:</MComponents.Typography>
        </MComponents.Grid>
        <MComponents.Grid item sm={12} md={3}>
          <MComponents.Chip label="20 Jan 2022" />
        </MComponents.Grid>
        <MComponents.Grid item sm={12} md={3}>
          <MComponents.Typography>Order Total:</MComponents.Typography>
        </MComponents.Grid>
        <MComponents.Grid item sm={12} md={3}>
          <MComponents.Button variant="outlined">$200.20</MComponents.Button>
        </MComponents.Grid>
      </MComponents.Grid>
      <MComponents.Box marginY={4}>
        <OrderItems />
      </MComponents.Box>
    </>
  );
};
export default OrderDetails;
