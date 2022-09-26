import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";
import { MComponents } from "../MUIExporter";
import { useForm } from "react-hook-form";
import { errorFormatter, errorMessages } from "../Utilites/Errors";
import { useDispatch } from "react-redux";
import { setStatus } from "../../store/slices/statusSlice";
import { onLogin, onLogout } from "../../store/slices/authSlice";
import {
  emailValid,
  passwordValid,
  confirmPasswordValid,
} from "../Utilites/Validation";
import axios from "axios";

const UserRegister = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });
  const formHandler = async (data) => {
    const formData = new FormData();
    props.submitHandler(true);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("password_confirmation", data.confirmPassword);
    axios
      .post("http://127.0.0.1:3000/auth/", formData)
      .then((response) => {
        dispatch(
          onLogin({
            token: response.headers.authorization,
            userImage: response.data.image,
            username: response.data.email,
          })
        );
        dispatch(
          setStatus({
            message: {
              message: "Registration Successfull.",
              type: "info",
            },
          })
        );
        reset();
        return navigate("/profile", { replace: true });
      })
      .catch((e) => {
        dispatch(
          setStatus({
            message: {
              message: errorFormatter(e.response.data.errors),
              type: "error",
            },
          })
        );
      })
      .finally(() => props.submitHandler(false));
  };

  return (
    <>
      <MComponents.Box bgcolor="white" borderRadius={2} sx={{ p: 1 }}>
        <MComponents.Typography variant="h3">Register</MComponents.Typography>
        <form action="#" noValidate onSubmit={handleSubmit(formHandler)}>
          <Input
            name="email"
            type="email"
            fields={{
              ...register("email", {
                required: true,
                validate: emailValid,
              }),
            }}
            error={errors.email ? errorMessages.register[0].email : false}
          />
          <Input
            name="password"
            type="password"
            fields={{
              ...register("password", {
                required: true,
                validate: passwordValid,
              }),
            }}
            error={errors.password ? errorMessages.register[1].password : false}
          />
          <Input
            name="confirm Password"
            type="password"
            fields={{
              ...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  confirmPasswordValid(value, getValues().password),
              }),
            }}
            error={
              errors.confirmPassword
                ? errorMessages.register[2].confirmPassword
                : false
            }
          />
          <MComponents.Stack sx={{ my: 2 }}>
            <MComponents.Button type="submit" size="large" variant="contained">
              Register
            </MComponents.Button>
          </MComponents.Stack>
        </form>
      </MComponents.Box>
    </>
  );
};
export default UserRegister;
