import priceFormater from "../../Utilites/priceFormater";
import OrderItem from "./OrderItem";
import gstCalculator from "./../../Utilites/gstCalcualor";
const OrderItemList = (props) => {
  console.log(props.orderDetails);
  return (
    <div className="p-2 table-responsive">
      <table className="table table-hover  table-striped">
        <thead className="bg-secondary text-white text-center">
          <tr>
            <th>Item</th>
            <th>Price (Per)</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {props.products.map((product) => (
            <OrderItem
              product={product}
              orderDetails={props.orderDetails.filter((productQuanity) => {
                if (product.id === productQuanity.product_id)
                  return productQuanity;
              })}
            />
          ))}
          <tr>
            <th>Tax(GST)</th>
            <td colspan="2"></td>
            <td>{priceFormater(gstCalculator(props.total))}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default OrderItemList;
