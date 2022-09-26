
import { MComponents, Icons } from "../../MUIExporter";
import UserPicture from "../UserPicture";
import AccountAddress from "./AccountAddress";
import { useSelector } from "react-redux";
const PanelAccount = () => {
  const authState = useSelector(state=>state.authReducer);
  return (
    <MComponents.Grid container direction="column">
      <MComponents.Grid item>
        <MComponents.Stack
          spacing={1}
          direction="row"
          alignItems="center"
          bgcolor="background.paper"
          justifyContent="space-between"
          sx={{ p: 3 }}
        >
          <UserPicture />

          <MComponents.Paper sx={{ p: 1 }} elevation={10}>
            <MComponents.Stack direction="row" spacing={4}>
              <MComponents.Chip
                label={authState.username}
                clickable
                sx={{ p: 2, bgcolor: "secondary.main" }}
                size="medium"
              />
              <MComponents.Box sx={{verticalAlign:'middle'}}>
                <Icons.AccessTime />
                <MComponents.Typography variant="overline">
                  08:20 am
                </MComponents.Typography>
              </MComponents.Box>
            </MComponents.Stack>
          </MComponents.Paper>
        </MComponents.Stack>
        <MComponents.Grid item>
          <MComponents.Typography variant="overline">
            My address:
          </MComponents.Typography>
          <AccountAddress />
        </MComponents.Grid>
      </MComponents.Grid>
    </MComponents.Grid>
  );
};
export default PanelAccount;
