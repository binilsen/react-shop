import { MComponents } from "../MUIExporter";
import AddressCard from "../UI/AddressCard";
const Address = (props) => {
  const radioHandler = (event) => {
    props.actionHandler(event.target.value);
  };
  return (
    <MComponents.Grid item xs={12} md={6}>
      <MComponents.Paper sx={{ p: 1 }}>
        <MComponents.Stack direction="row">
          <MComponents.Radio value={props.data._id.$oid} onChange={radioHandler} />
        {<AddressCard address={props.data} />}
        </MComponents.Stack>
      </MComponents.Paper>
    </MComponents.Grid>
  );
};
export default Address;
