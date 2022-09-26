import { useState } from "react";
import { MComponents,Backdrop } from "../MUIExporter";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
import account from "../../assets/account.svg";
const User = () => {
  const [isLogin, setIsLogin] = useState(false);
  const toggleHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const btnText = isLogin
    ? "New to React Shop? create account"
    : "  Already have an account?";
  const [isSubmitted, setisSubmitted] = useState(false);
  const submitHandler = (isSubmitted) => {
    setisSubmitted(isSubmitted);
  };
  return (
    <>
      <MComponents.Container sx={{ height: "100vh" }}>
        <MComponents.Paper sx={{ m: 5, p: 1, height: "500px" }} elevation={10}>
          <MComponents.Grid container height="100%" justifyContent="center">
            <MComponents.Grid
              item
              md={6}
              sx={{
                background: `url(${account}) no-repeat center`,
                backgroundSize: "contain",
              }}
            ></MComponents.Grid>

            <MComponents.Grid item md={6} sx={{ p: 3 }}>
              {isLogin && <UserLogin submitHandler={submitHandler} />}
              {!isLogin && <UserRegister submitHandler={submitHandler} />}
              <MComponents.Box textAlign="center" marginTop={4}>
                <MComponents.Button variant="outlined" onClick={toggleHandler}>
                  {btnText}
                </MComponents.Button>
              </MComponents.Box>
            </MComponents.Grid>
          </MComponents.Grid>
        </MComponents.Paper>
      </MComponents.Container>
      {isSubmitted && <Backdrop open={isSubmitted} />}
    </>
  );
};

export default User;
