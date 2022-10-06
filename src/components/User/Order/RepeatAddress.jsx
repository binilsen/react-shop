import { MComponents } from "../../MUIExporter";
import { Controller } from "react-hook-form";
const RepeatAddress = (props) => {
  return (
    <MComponents.Stack direction="row" py={2} justifyContent="space-between">
      <MComponents.Typography>Select an address:</MComponents.Typography>
      <Controller
        control={props.control}
        name="address"
        defaultValue={props.initial}
        render={({ field }) => (
          <MComponents.Select {...field} variant="standard" size="small">
            {props.addresses.map((item) => (
              <MComponents.MenuItem value={item._id.$oid}>
                {item.name}, {item.address}, {item.locality},{item.city},{" "}
                {item.state}, {item.mobile},
              </MComponents.MenuItem>
            ))}
          </MComponents.Select>
        )}
      />
    </MComponents.Stack>
  );
};
export default RepeatAddress;
