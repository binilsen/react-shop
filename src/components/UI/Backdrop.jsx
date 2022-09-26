import { MComponents } from "../MUIExporter";
import { SpinnerCircular } from "spinners-react";
const Backdrop = (props) => {
  return (
    <MComponents.Backdrop
      open={props.open}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <SpinnerCircular size={100} color="orange" />
    </MComponents.Backdrop>
  );
};

export default Backdrop;
