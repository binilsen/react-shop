import { useNavigate } from "react-router-dom";
import { MComponents, Icons } from "../../MUIExporter";

const Usernav = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    return navigate(-1, { replace: true });
  };
  return (
    <MComponents.Stack direction="row" justifyContent="flex-start" mx={1}>
      <MComponents.Button
        variant="contained"
        color="secondary"
        onClick={backHandler}
        size="small"
      >
        <Icons.ArrowBackIosNew />
        Back
      </MComponents.Button>
    </MComponents.Stack>
  );
};

export default Usernav;
