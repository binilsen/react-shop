import { MComponents } from "../../MUIExporter";
import priceFormatter from "../../Utilites/priceFormatter";

const OrderItem = (props) => {
  return (
    <>
      <MComponents.TableRow key={props.item._id.$oid}>
        <MComponents.TableCell>{props.item.product.name}</MComponents.TableCell>
        <MComponents.TableCell align="right">
          {props.item.quantity}
        </MComponents.TableCell>
        <MComponents.TableCell align="right">
          {priceFormatter(props.item.product.price)}
        </MComponents.TableCell>
        <MComponents.TableCell align="right">
          {priceFormatter(props.item.product.price * props.item.quantity)}
        </MComponents.TableCell>
      </MComponents.TableRow>
    </>
  );
};
export default OrderItem;
