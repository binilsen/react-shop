import { useRef, useState } from "react";
import Input from "../UI/Input";

const TokenForm = (props) => {
  const [isTokenValid, setisTokenValid] = useState(false);
  const btnStyle = isTokenValid ? "" : "disabled";
  const error = <small className="px-1 text-capitalize text-danger">invalid token!</small>;
  const tokenRef = useRef();
  const formHandler = (event) => {
    event.preventDefault();
    props.onTokenSubmit(tokenRef.current.value);
    tokenRef.current.value = "";
    setisTokenValid(false);
  };
  const ontokenChange = () => {
    if (tokenRef.current.value.length > 100) setisTokenValid(true);
    else setisTokenValid(false);
    return;
  };
  return (
    <>
      <div className="row m-3 justify-content-center">
        <div className="col-sm-6">
          <form action="#" onSubmit={formHandler}>
            <Input
              type="text"
              name="token"
              ref={tokenRef}
              placeholder="Enter the Token"
              onChange={ontokenChange}
            />
            {!isTokenValid && error}
            <div className="text-center my-3">
              <button className={`${btnStyle} btn btn-dark`}>Fetch</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TokenForm;
