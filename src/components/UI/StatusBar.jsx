import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";

const StatusBar = () => {
  const authCtx = useContext(AuthContext);
  const [status, setStatus] = useState(authCtx.status);
  useEffect(() => {
    setStatus(authCtx.status);
  }, [authCtx.status]);
  return (
    <>
      {status && (
        <div className="alert w-50 mx-auto alert-info text-center my-3 fw-bold">
          {status}
        </div>
      )}
    </>
  );
};
export default StatusBar;
