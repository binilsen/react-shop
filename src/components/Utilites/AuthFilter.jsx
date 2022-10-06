// import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setStatus } from "../../store/slices/statusSlice";
const AuthFilter = (props) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.authReducer.isLoggedIn);
  if (authState) return props.children;
  dispatch(
    setStatus({
      message: "You need to login first.",
      type: "error",
    })
  );
  return <Navigate to="/user" replace />;
};
export default AuthFilter;
