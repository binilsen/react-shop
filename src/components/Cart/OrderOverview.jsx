import { useSelector } from "react-redux";
import { MComponents, Icons } from "../MUIExporter";
import AddressCard from "../UI/AddressCard";
import CartAction from "./CartAction";
import { gstFormatter } from "../Utilites/priceFormatter";
const OrderOverview = (props) => {
  const cartState = useSelector((state) => state.cartReducer);
  const product = useSelector((state) => state.buyNowreducer);
  const amount = props.isBuynow
    ? gstFormatter(product.amount) + product.amount
    : null;
  return (
    <MComponents.Stack spacing={2}>
      <MComponents.Typography variant="overline" borderBottom={1}>
        Order Overview
      </MComponents.Typography>

      <MComponents.Paper elevation={5} sx={{ p: 3, my: 2 }}>
        <MComponents.Grid container spacing={3} minHeight="200px">
          <MComponents.Grid item md={4} sm={12} xs={12}>
            <MComponents.Typography variant="overline">
              Selected address:
            </MComponents.Typography>
            <AddressCard address={props.address} />
          </MComponents.Grid>
          <MComponents.Grid item md={4} sm={12} xs={12}>
            <MComponents.Stack spacing={2}>
              <MComponents.Typography variant="overline">
                <Icons.CurrencyRupee /> Payment Mode:
              </MComponents.Typography>
              <MComponents.Button variant="outlined">
                Cash on delivery
              </MComponents.Button>
            </MComponents.Stack>
          </MComponents.Grid>
          <MComponents.Grid item md={4} sm={12} xs={12}>
            <MComponents.Stack>
              <MComponents.Typography variant="overline" marginBottom={2}>
                Amount to be paid:
              </MComponents.Typography>
              <MComponents.Typography
                variant="h4"
                bgcolor="secondary.main"
                textAlign="center"
              >
                <Icons.CurrencyRupee />
                {cartState.cartTotal || Number.parseInt(amount)}
              </MComponents.Typography>
            </MComponents.Stack>
          </MComponents.Grid>
        </MComponents.Grid>
        <CartAction address={props.address} isBuynow={!!amount} />
      </MComponents.Paper>
    </MComponents.Stack>
  );
};
export default OrderOverview;
