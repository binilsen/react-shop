import { useSelector } from "react-redux";
import { MComponents } from "../MUIExporter";
import priceFormatter from "../Utilites/priceFormatter";
import { gstFormatter } from "../Utilites/priceFormatter";
const CartTotal = () => {
  const cartTotal = useSelector((state) => state.cartReducer.cartTotal);
  console.log(gstFormatter(20));
  return (
    <>
      <MComponents.Typography
        variant="button"
        bgcolor="secondary.main"
        padding={1}
      >
        Cart Summary
      </MComponents.Typography>
      <MComponents.Stack alignItems="center" spacing={1} marginY={3}>
        <MComponents.Grid container>
          <MComponents.Grid item md={6} xs={12} sm={12}>
            <MComponents.Typography variant="overline">
              Cart subtotal
            </MComponents.Typography>
          </MComponents.Grid>
          <MComponents.Grid item md={6} xs={12} sm={12}>
            <MComponents.Typography variant="h6">
              :{priceFormatter(gstFormatter(cartTotal))}
            </MComponents.Typography>
          </MComponents.Grid>
          <MComponents.Grid item md={6} xs={12} sm={12} borderBottom={1}>
            <MComponents.Typography variant="overline">
              GST
            </MComponents.Typography>
          </MComponents.Grid>
          <MComponents.Grid item md={6} xs={12} sm={12} borderBottom={1}>
            <MComponents.Typography variant="h6">
              : {priceFormatter(cartTotal - gstFormatter(cartTotal))}
            </MComponents.Typography>
          </MComponents.Grid>
          <MComponents.Grid item md={6} xs={12} sm={12}>
            <MComponents.Typography variant="overline">
              Cart Total
            </MComponents.Typography>
          </MComponents.Grid>
          <MComponents.Grid item md={6} xs={12} sm={12}>
            <MComponents.Typography
              variant="button"
              fontSize="large"
              bgcolor="secondary.light"
            >
              :{priceFormatter(cartTotal)}
            </MComponents.Typography>
          </MComponents.Grid>
        </MComponents.Grid>
      </MComponents.Stack>
    </>
  );
};
export default CartTotal;
