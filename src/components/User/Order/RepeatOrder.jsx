import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MComponents } from "../../MUIExporter";
import priceFormatter, { gstFormatter } from "../../Utilites/priceFormatter";
import RepeatAddress from "./RepeatAddress";
import RepeatItem from "./RepeatItem";
const RepeatOrder = (props) => {
  const [addresses, setAddresses] = useState();
  const [total, setTotal] = useState(props.data.order.order.total);
  const [isSuccess, setIssuccess] = useState(false);
  const formData = new FormData();
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
  };
  const formHandler = (data) => {
    formData.append("address", data.address);
    formData.append("total", total);
    const items = [];
    props.data.order.products.map((item) => {
      items.push({
        _id: item.product._id.$oid,
        quantity: data[item.product._id.$oid],
      });
    });
    formData.append("products", JSON.stringify(items));
    axios
      .post(
        `http://localhost:3000/api/v1/orders/${props.data.order.order._id.$oid}/order_again`,
        formData,
        {
          headers: {
            authorization: Cookies.get("rails-token"),
          },
        }
      )
      .then((response) => setIssuccess(response.data.id));
  };
  const updateHandler = () => {
    const products = props.data.order.products;
    const data = getValues();
    var total = 0;
    products.map((item) => {
      total += item.product.price * data[item.product._id.$oid];
    });
    setTotal(gstFormatter(total, false) + total);
  };
  const closeHandler = () => {
    props.closeHandler();
    reset();
    setTotal(props.data.order.order.total);
  };
  const { control, handleSubmit, setValue, getValues, reset } = useForm();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/addresses", {
        headers: {
          authorization: Cookies.get("rails-token"),
        },
      })
      .then((response) => setAddresses(response.data));
  }, []);
  return (
    <MComponents.Modal
      open={props.open}
      onClose={props.closeHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <MComponents.Box sx={modalStyle}>
        {!isSuccess && (
          <MComponents.Stack>
            <MComponents.Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              borderBottom={1}
            >
              Place an order
            </MComponents.Typography>
            <MComponents.Box>
              {addresses && (
                <RepeatAddress
                  initial={props.data.order.order.address_id.$oid}
                  addresses={addresses}
                  control={control}
                />
              )}
              <form onSubmit={handleSubmit(formHandler)}>
                <MComponents.TableContainer sx={{ textAlign: "center" }}>
                  <MComponents.Table>
                    <MComponents.TableHead>
                      <MComponents.TableRow>
                        <MComponents.TableCell>Item</MComponents.TableCell>
                        <MComponents.TableCell>Price</MComponents.TableCell>
                        <MComponents.TableCell align="center">
                          Quantity
                        </MComponents.TableCell>
                        <MComponents.TableCell>Sum</MComponents.TableCell>
                      </MComponents.TableRow>
                    </MComponents.TableHead>
                    <MComponents.TableBody>
                      {props.data.order.products.map((item) => (
                        <RepeatItem
                          product={item.product}
                          quantity={item.quantity}
                          control={control}
                          setValue={setValue}
                          getValues={getValues}
                          updateHandler={updateHandler}
                        />
                      ))}
                    </MComponents.TableBody>
                  </MComponents.Table>
                </MComponents.TableContainer>
                <MComponents.Stack
                  justifyContent="flex-end"
                  alignItems="end"
                  p={2}
                >
                  <MComponents.Typography variant="overline">
                    gst: {priceFormatter(total - gstFormatter(total))}
                  </MComponents.Typography>
                  <MComponents.Typography variant="overline">
                    Order Total: {priceFormatter(total)}
                  </MComponents.Typography>
                  <MComponents.Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                  >
                    Order
                  </MComponents.Button>
                </MComponents.Stack>
              </form>
            </MComponents.Box>
            <MComponents.Stack
              direction="row"
              justifyContent="space-between"
              borderTop={1}
              py={1}
              mt={2}
            >
              <MComponents.Button variant="contained" onClick={closeHandler}>
                Cancel
              </MComponents.Button>
            </MComponents.Stack>
          </MComponents.Stack>
        )}
        {isSuccess && (
          <MComponents.Typography variant="h5" textAlign="center">
            Order Success: {isSuccess.$oid}
          </MComponents.Typography>
        )}
      </MComponents.Box>
    </MComponents.Modal>
  );
};
export default RepeatOrder;
