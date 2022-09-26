import { MComponents } from "../../MUIExporter";
import Address from "./Address";
const AccountAddress = () => {
  return (
    
      <MComponents.Grid container spacing={1}>
        <Address />
        <Address />
        <Address />
      </MComponents.Grid>
  );
};
export default AccountAddress;
