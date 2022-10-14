import { MComponents } from "../MUIExporter";
const Input = (props) => {
  return (
    <MComponents.Stack>
      <MComponents.TextField
        variant="standard"
        type={props.type}
        {...props.fields}
        label={props.name}
        error={Boolean(props.error)}
        sx={{ my: 1, textTransform: "capitalize" }}
        helperText={props.error}
      />
    </MComponents.Stack>
  );
};

export default Input;
