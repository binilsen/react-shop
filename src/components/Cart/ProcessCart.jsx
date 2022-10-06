import { MComponents } from "../MUIExporter";
import Address from "./Address";
import { useEffect, useState } from "react";
import OrderOverview from "./OrderOverview";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
const ProcessCart = () => {
  const params = useParams();
  const isBuynow = params.cart_id == "buy-now" ? true : false;
  const [selectedAddress, setselectedAddress] = useState(false);
  const [addresses, setAddresses] = useState();
  const checkHandler = (value) => {
    const addressFromList = addresses.find((item) => item._id.$oid == value);
    setselectedAddress(addressFromList);
  };
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
    <MComponents.Container maxWidth="lg" sx={{ my: 4 }}>
      <MComponents.Paper sx={{ p: 2 }} elevation={5}>
        {!selectedAddress && (
          <MComponents.Stack spacing={1}>
            <MComponents.Typography variant="overline" borderBottom={1}>
              Select an address
            </MComponents.Typography>
            <MComponents.RadioGroup name="radio-address">
              <MComponents.Grid container spacing={1}>
                {addresses &&
                  addresses.map((item) => (
                    <Address actionHandler={checkHandler} data={item} />
                  ))}
              </MComponents.Grid>
            </MComponents.RadioGroup>
          </MComponents.Stack>
        )}
        {selectedAddress && <OrderOverview address={selectedAddress} isBuynow={isBuynow} />}
      </MComponents.Paper>
    </MComponents.Container>
  );
};
export default ProcessCart;
