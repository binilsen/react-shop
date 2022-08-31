import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import CartContext from "../../store/cart-context";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useContext } from "react";
import { useNavigate } from "react-router";
const GoogleAuth = () => {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();
  const authHandler = (data) => {
    axios
      .post("http://127.0.0.1:3000/users/auth/google_oauth2/callback", data)
      .then((response) => {
        authCtx.onLogin({
          token: response.headers.authorization,
          username: response.data.user.email,
          id: response.data.user.id,
        });
        cartCtx.cartUpdate(response.data.cart);
        authCtx.setStatus("Successfully logged in.");
        return navigate(`/users/${response.data.id}`, { replace: true });
      })
      .catch((e) => authCtx.setStatus(e.message));
  };
  const login = useGoogleLogin({
    onSuccess: (response) => authHandler(response),
    flow: "auth-code",
  });
  return (
    <>
      <div className="d-flex  mx-auto justify-content-center my-2  p-1">
        <GoogleLoginButton onClick={login}>Google Login</GoogleLoginButton>
      </div>
    </>
  );
};
export default GoogleAuth;
