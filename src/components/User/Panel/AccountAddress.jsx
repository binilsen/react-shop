import { MComponents } from "../../MUIExporter";
import Address from "./Address";
const AccountAddress = (props) => {
  return (
    <MComponents.Grid container spacing={1}>
      {props.addresses.map((item) => (
        <Address data={item} />
      ))}
    </MComponents.Grid>
  );
};
export default AccountAddress;
