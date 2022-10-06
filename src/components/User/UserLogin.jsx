import { useForm } from "react-hook-form";
import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";
import { MComponents } from "../MUIExporter";
import { useDispatch } from "react-redux";
import { onLogin } from "../../store/slices/authSlice";
import { setCart } from "../../store/slices/cartSlice";
import { setStatus } from "../../store/slices/statusSlice";
import axios from "axios";
const UserForm = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const formHandler = async (data) => {
    const formData = new FormData();
    props.submitHandler(true);
    formData.append("email", data.email);
    formData.append("password", data.password);
    axios
      .post("http://127.0.0.1:3000/api/v1/auth/sign_in", formData)
      .then((response) => {
        dispatch(
          onLogin({
            token: response.headers.authorization,
            userImage: response.data.image,
            username: response.data.user.email,
            userId: response.data.user.id,
          })
        );
        if (response.data.cart)
          dispatch(
            setCart({
              cartId: response.data.cart._id.$oid,
              carts_products: response.data.cart.carts_products,
              cartTotal: response.data.cart.total,
            })
          );
        dispatch(
          setStatus({ message: "Successfully logged in.", type: "success" })
        );
        reset();
        return navigate(`/user/profile/${response.data.user.id}`, {
          replace: true,
        });
      })
      .catch((e) =>
        dispatch(
          setStatus({
            message: { message: e.response.data.errors[0], type: "error" },
          })
        )
      )
      .finally(() => props.submitHandler(false));
  };
  return (
    <>
      <MComponents.Box>
        <MComponents.Typography variant="h3">Login</MComponents.Typography>
        <form action="#" noValidate onSubmit={handleSubmit(formHandler)}>
          <Input
            name="email"
            type="email"
            fields={{ ...register("email", { required: true }) }}
            error={errors.email && "Email can't be blank"}
          />
          <Input
            name="password"
            type="password"
            fields={{ ...register("password", { required: true }) }}
            error={errors.password && "Password can't be blank."}
          />
          <MComponents.Stack sx={{ py: 2 }}>
            <MComponents.Button type="submit" variant="contained" size="large">
              login
            </MComponents.Button>
          </MComponents.Stack>
        </form>
      </MComponents.Box>
    </>
  );
};

export default UserForm;
