import { MComponents } from "../../MUIExporter";
import Loader from "../../Utilites/Loader";
import StatusStepper from "../../UI/StatusStepper";
import OrderDetails from "./OrderDetails";
import Usernav from "../../UI/Navbar/Usernav";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import setStatus from "../../../store/slices/statusSlice";
import RepeatOrder from "./RepeatOrder";

const Order = () => {
  const [order, setOrder] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);
  const params = useParams();
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`http://localhost:3000/api/v1/orders/${params.order_id}`)
      .then((response) => setOrder(response.data))
      .catch((e) => dispatch(setStatus({})))
      .finally((e) => setisLoading(false));
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {order && (
        <MComponents.Container maxWidth="md" sx={{ mb: 20 }}>
          <Usernav />
          <MComponents.Stack
            direction="row"
            justifyContent="space-between"
            borderBottom="1px solid teal"
            alignItems="center"
            sx={{ py: 2 }}
          >
            <MComponents.Chip
              label={`RS${order.order._id.$oid}`}
              size="medium"
              sx={{
                textTransform: "uppercase",
                fontSize: 17,
                letterSpacing: 2,
                fontWeight: "bold",
              }}
            />
            <MComponents.Stack
              direction="row"
              spacing={1}
              justifyContent="flex-end"
            >
              <MComponents.Button
                variant="contained"
                color="secondary"
                onClick={openHandler}
              >
                Order again
              </MComponents.Button>
              <MComponents.Button variant="contained" color="error">
                Processing
              </MComponents.Button>
            </MComponents.Stack>
          </MComponents.Stack>
          <StatusStepper />
          <OrderDetails order={order.order} products={order.products} />
          <RepeatOrder open={open} closeHandler={closeHandler} data={{order}} />
        </MComponents.Container>
      )}
    </>
  );
};
export default Order;
