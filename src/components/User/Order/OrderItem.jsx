import priceFormater from "./../../Utilites/priceFormater";
const OrderItem = (props) => {
  return (
    <tr>
      <td>
        <p className="text-decoration-none">{props.product.product_name}</p>
      </td>
      <td class="text-center">{priceFormater(props.product.product_price)}</td>
      <td class="text-center">{props.orderDetails[0].quantity}</td>
      <td class="text-center">
        {priceFormater(
          props.product.product_price * props.orderDetails[0].quantity
        )}
      </td>
    </tr>
  );
};

export default OrderItem;
