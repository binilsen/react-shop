import { MComponents } from "../../MUIExporter";
import OrderListItem from "../Order/OrderListItem";
const PanelOrderLListItems = () => {
  return (
    <MComponents.Stack spacing={2}>
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
    </MComponents.Stack>
  );
};
export default PanelOrderLListItems;
