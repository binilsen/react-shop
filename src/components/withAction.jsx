import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setStatus } from "../store/slices/statusSlice";

const withAction = (Component) => {
  const Wrapper = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cookies = Cookies.get('rails-token');
    const defaultServerError = () => {
      dispatch(setStatus({}));
    };
    const authState = useSelector((state) => state.authReducer);
    const cartProducts = useSelector(
      (state) => state.cartReducer.carts_products
    );

    return (
      <Component
        Link={Link}
        dispatch={dispatch}
        navigate={navigate}
        defaultServerError={defaultServerError}
        authState={authState}
        cookies={cookies}
        cartProducts={cartProducts}
        {...props}
      />
    );
  };
  return Wrapper;
};

export default withAction;
