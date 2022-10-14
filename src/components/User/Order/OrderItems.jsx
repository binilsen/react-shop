import { MComponents } from "../../MUIExporter";
import OrderItem from "./OrderItem";
import priceFormatter from "../../Utilites/priceFormatter";
import { gstFormatter } from "../../Utilites/priceFormatter";
const OrderItems = (props) => {
  return (
    <MComponents.TableContainer component={MComponents.Paper}>
      <MComponents.Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <MComponents.TableHead>
          <MComponents.TableRow>
            <MComponents.TableCell align="center" colSpan={3}>
              Details
            </MComponents.TableCell>
            <MComponents.TableCell align="right">Price</MComponents.TableCell>
          </MComponents.TableRow>
          <MComponents.TableRow>
            <MComponents.TableCell>Item</MComponents.TableCell>
            <MComponents.TableCell align="right">Qty.</MComponents.TableCell>
            <MComponents.TableCell align="right">Unit</MComponents.TableCell>
            <MComponents.TableCell align="right">Sum</MComponents.TableCell>
          </MComponents.TableRow>
        </MComponents.TableHead>
        <MComponents.TableBody>
          {props.data.map((item) => (
            <OrderItem item={item} />
          ))}
          <MComponents.TableRow>
            <MComponents.TableCell rowSpan={3} />
            <MComponents.TableCell colSpan={2}>Subtotal</MComponents.TableCell>
            <MComponents.TableCell align="right">
              {priceFormatter(gstFormatter(props.order.total))}
            </MComponents.TableCell>
          </MComponents.TableRow>
          <MComponents.TableRow>
            <MComponents.TableCell>Tax</MComponents.TableCell>
            <MComponents.TableCell align="right"></MComponents.TableCell>
            <MComponents.TableCell align="right">
              {priceFormatter(
                props.order.total - gstFormatter(props.order.total)
              )}
            </MComponents.TableCell>
          </MComponents.TableRow>
          <MComponents.TableRow>
            <MComponents.TableCell colSpan={2}>Total</MComponents.TableCell>
            <MComponents.TableCell align="right">
              {priceFormatter(props.order.total)}
            </MComponents.TableCell>
          </MComponents.TableRow>
        </MComponents.TableBody>
      </MComponents.Table>
    </MComponents.TableContainer>
  );
};
export default OrderItems;
