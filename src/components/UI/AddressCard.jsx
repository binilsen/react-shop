import { Icons, MComponents } from "../MUIExporter";

const AddressCard = (props) => {
  return (
    <MComponents.Paper
          sx={{ bgcolor: "primary.dark", color: "secondary.main", width:'100%' }}
    >
      <MComponents.Stack p={2} my={2} spacing={1}>
        <Icons.LocalShippingTwoTone />
        <MComponents.Typography variant="overline">
          {props.address.name}
        </MComponents.Typography>
        <MComponents.Typography variant="overline">
          {props.address.address}
        </MComponents.Typography>
        <MComponents.Typography variant="overline">
          {props.address.locality}
        </MComponents.Typography>
        <MComponents.Typography variant="overline">
          {props.address.city}, {props.address.state}, {props.address.pincode}
        </MComponents.Typography>
        <MComponents.Stack>
          <MComponents.Typography variant="overline">
            {props.address.address_type.time}
          </MComponents.Typography>
        </MComponents.Stack>
      </MComponents.Stack>
    </MComponents.Paper>
  );
};
export default AddressCard;
