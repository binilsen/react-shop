import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
const AuthFilter = (props) => {
  const authCtx = useContext(AuthContext);
  const [isLoginValid, setIsLoginValid] = useState(
    localStorage.getItem("login_valid")
  );
  useEffect(() => {
    setIsLoginValid(localStorage.getItem("login_valid"));
  }, [localStorage.getItem("login_valid")]);
  if (isLoginValid) return props.children;
  authCtx.setStatus("You need to login first.");
  return <Navigate to="/user" replace />;
};
export default AuthFilter;
