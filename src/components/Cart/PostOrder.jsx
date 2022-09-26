import { Link } from "react-router-dom";
import { MComponents } from "../MUIExporter";

const PostOrder = () => {
  return (
    <MComponents.Stack>
      <MComponents.Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/cart/1/processcart"
      >
        Place order
      </MComponents.Button>
    </MComponents.Stack>
  );
};
export default PostOrder;
