import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
const AuthFilter = (props) => {
  const authCtx = useContext(AuthContext);
  const [isLoginValid, setIsLoginValid] = useState(Cookies.get("authToken"));
  useEffect(() => {
    setIsLoginValid(Cookies.get("authToken"));
    if (!isLoginValid) authCtx.setStatus("You need to login first.");
  }, []);
  if (isLoginValid) return props.children;
  return <Navigate to="/user" replace />;
};
export default AuthFilter;
