import { useSelector } from "react-redux";
import { MComponents, Icons } from "../../MUIExporter";
import NavItem from "./NavbarItem";
import { useDispatch } from "react-redux";
import { setStatus } from "../../../store/slices/statusSlice";
import { onLogout } from "../../../store/slices/authSlice";
import axios from "axios";
import Cookies from "js-cookie";
import styles from "./Navbar.module.css";
const NavbarMenu = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.authReducer);
  const cartState = useSelector((state) => state.cartReducer);
  const logoutHandler = () => {
    axios.delete("http://127.0.0.1:3000/api/v1/auth/sign_out", {
      headers: {
        authorization: Cookies.get("rails-token"),
      },
    });
    dispatch(onLogout());
    dispatch({ type: "RESET" });
    dispatch(
      setStatus({ message: "Logged out successfully", type: "success" })
    );
  };
  return (
    <>
      <NavItem to="/" title="Home">
        <Icons.Home />
      </NavItem>
      {authState.isLoggedIn && (
        <NavItem
          to={`user/profile/${authState.userId}`}
          title="User Central"
          image={authState.userImage}
        />
      )}
      {!authState.isLoggedIn && (
        <NavItem to="user" title="Account">
          <Icons.Person />
        </NavItem>
      )}

      {authState.isLoggedIn && (
        <NavItem to="logout" title="Logout" onClick={logoutHandler}>
          <Icons.Logout />
        </NavItem>
      )}
      {authState.isLoggedIn && (
        <MComponents.Badge
          badgeContent={
            cartState.carts_products ? cartState.carts_products.length : 0
          }
          overlap="circular"
          color="secondary"
        >
          <NavItem to="cart" title="Cart">
            <Icons.ShoppingCartCheckoutOutlined />
          </NavItem>
        </MComponents.Badge>
      )}
    </>
  );
};

export default NavbarMenu;
