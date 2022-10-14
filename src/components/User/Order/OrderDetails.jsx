import { MComponents } from "../../MUIExporter";
import OrderItems from "./OrderItems";
import priceFormatter from "../../Utilites/priceFormatter";
import AddressCard from "../../UI/AddressCard";
const OrderDetails = (props) => {
  const date = new Date(props.order.created_at).toDateString();
  return (
    <>
      <MComponents.Typography variant="overline">
        Order Details
      </MComponents.Typography>

      <MComponents.Grid
        container
        alignItems="center"
        fontWeight="bold"
        borderTop={1}
        borderBottom={1}
        py={1}
      >
        <MComponents.Grid item sm={12} md={3}>
          <MComponents.Typography>Ordered on:</MComponents.Typography>
        </MComponents.Grid>
        <MComponents.Grid item sm={12} md={3}>
          <MComponents.Chip label={date} color="secondary" />
        </MComponents.Grid>
        <MComponents.Grid item sm={12} md={3}>
          <MComponents.Typography>Order Total:</MComponents.Typography>
        </MComponents.Grid>
        <MComponents.Grid item sm={12} md={3}>
          <MComponents.Button variant="contained">
            {priceFormatter(props.order.total)}
          </MComponents.Button>
        </MComponents.Grid>
        <MComponents.Grid item md={6}>
          <MComponents.Typography variant="subtitle1">
            Deliver to:
          </MComponents.Typography>
        </MComponents.Grid>
        <MComponents.Grid item md={6}>
          <AddressCard address={props.order.address} />
        </MComponents.Grid>
      </MComponents.Grid>
      <MComponents.Box marginY={4}>
        <OrderItems data={props.products} order={props.order} />
      </MComponents.Box>
    </>
  );
};
export default OrderDetails;
