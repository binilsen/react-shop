import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MComponents } from "../MUIExporter";

const PostOrder = () => {
  const userId = useSelector((state) => state.authReducer.userId);
  const cartId = useSelector((state) => state.cartReducer.cartId);
  return (
    <MComponents.Stack>
      <MComponents.Button
        variant="contained"
        color="secondary"
        component={Link}
        to={`/cart/${cartId}/processcart`}
      >
        Place order
      </MComponents.Button>
    </MComponents.Stack>
  );
};
export default PostOrder;
