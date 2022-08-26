import OrdersListItem from "./OrdersListItem";

const OrderList = (props) => {
  return (
    <>
      {props.orders.map((item) => (
        <OrdersListItem
          orderId={item.id}
          created_at={item.created_at}
          total={item.total}
        />
      ))}
    </>
  );
};
export default OrderList;
