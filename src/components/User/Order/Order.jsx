import { MComponents } from "../../MUIExporter";
import StatusStepper from "../../UI/StatusStepper";
import OrderDetails from "./OrderDetails";

const Order = () => {
  return (
    <MComponents.Container maxWidth="md" sx={{ mb: 10, height: "100vh" }}>
      <MComponents.Stack
        direction="row"
        justifyContent="space-between"
        borderBottom="1px solid teal"
        alignItems="center"
        sx={{ py: 2 }}
      >
        <MComponents.Chip label="  Order RS1212232322" size="medium" />

        <MComponents.Button variant="contained" color="error">
          Processing
        </MComponents.Button>
      </MComponents.Stack>
      <StatusStepper />
      <OrderDetails />
    </MComponents.Container>
  );
};
export default Order;
