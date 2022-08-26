import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import priceFormater from "./../../Utilites/priceFormater";
const OrdersListItem = (props) => {
  const date = new Date(props.created_at).toDateString();
  const authCtx = useContext(AuthContext);
  return (
    <tr>
      <th>
        <Link
          to={`/users/${authCtx.userId}/orders/${props.orderId}`}
          className="btn btn-outline-dark"
        >
          {props.orderId}
        </Link>
      </th>
      <th>{date}</th>
      <td>{priceFormater(props.total)}</td>
      <td>
        <button className="btn btn-primary" type="button">
          Processing
        </button>
      </td>
    </tr>
  );
};

export default OrdersListItem;
