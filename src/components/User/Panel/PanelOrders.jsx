import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { MComponents } from "../../MUIExporter";
import OrderListItem from "../Order/OrderListItem";
import { DefaultLoader } from "../../Utilites/Loader";
const PanelOrderLListItems = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/api/v1/orders", {
        headers: {
          authorization: Cookies.get("rails-token"),
        },
      })
      .then((response) => setOrders(response.data));
  }, []);

  return (
    <MComponents.Container sx={{ height: "500px", overflow: "auto" }}>
      <MComponents.Stack spacing={2} py={2} >
        {!orders && <DefaultLoader />}
        {orders &&
          orders.map((item) => (
            <OrderListItem
              back={location.pathname}
              id={item._id.$oid}
              date={item.created_at}
              amount={item.total}
            />
          ))}
      </MComponents.Stack>
    </MComponents.Container>
  );
};
export default PanelOrderLListItems;
