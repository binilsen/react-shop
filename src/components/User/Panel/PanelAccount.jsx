import { MComponents, Icons } from "../../MUIExporter";
import UserPicture from "../UserPicture";
import AccountAddress from "./AccountAddress";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import { DefaultLoader } from "../../Utilites/Loader";
import ExpenseChart from "./ExpenseChart";
const PanelAccount = () => {
  const [address, setAddress] = useState();
  const [isLoading, setisLoading] = useState(false);
  const authState = useSelector((state) => state.authReducer);
  useEffect(() => {
    setisLoading(true);
    axios
      .get("http://localhost:3000/api/v1/addresses", {
        headers: { authorization: Cookies.get("rails-token") },
      })
      .then((response) => setAddress(response.data))
      .catch((e) => console.log(e))
      .finally((e) => setisLoading(false));
  }, []);
  return (
    <>
      <MComponents.Grid
        container
        direction="column"
        color="secondary.main"
        bgcolor="primary.main"
        p={2}
      >
        <MComponents.Grid item>
          <MComponents.Stack
            spacing={1}
            direction="row"
            alignItems="center"
            bgcolor="background.paper"
            justifyContent="space-between"
            borderRadius={3}
            sx={{ p: 3 }}
          >
            <UserPicture />
            <MComponents.Stack direction="row" spacing={4}>
              <MComponents.Chip
                label={authState.username}
                clickable
                sx={{ p: 2, bgcolor: "secondary.main" }}
                size="medium"
              />
              <MComponents.Box sx={{ verticalAlign: "middle" }}>
                <Icons.AccessTime />
                <MComponents.Typography color="primary" variant="overline">
                  08:20 am
                </MComponents.Typography>
              </MComponents.Box>
            </MComponents.Stack>
          </MComponents.Stack>
          <ExpenseChart />
          <MComponents.Grid item>
            <MComponents.Stack
              direction="row"
              my={3}
              justifyContent="space-between"
              alignItems="center"
            >
              <MComponents.Typography variant="overline">
                My address:
              </MComponents.Typography>
              <MComponents.Button
                variant="contained"
                component={Link}
                to="/user/profile/:id/add-address"
                size="small"
                color="secondary"
              >
                Add
              </MComponents.Button>
            </MComponents.Stack>
            {isLoading && <DefaultLoader />}
            {!isLoading && address && <AccountAddress addresses={address} />}
          </MComponents.Grid>
        </MComponents.Grid>
      </MComponents.Grid>
    </>
  );
};
export default PanelAccount;
