import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { MComponents } from "../../MUIExporter";
import Usernav from "../../UI/Navbar/Usernav";
import { useDispatch, useSelector } from "react-redux";
import { pincodeValid, mobileValid } from "../../Utilites/Validation";
import { setStatus } from "../../../store/slices/statusSlice";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
const EditAddress = (props) => {
  const [addType, setaddType] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const authState = useSelector((state) => state.authReducer.userId);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({mode:'onChange'});
  const formHandler = (data) => {
    const axiosData = {
      address: {
        address: data.address,
        address_type_id: data.type,
        pincode: data.pincode,
        city: data.city,
        locality: data.locality,
        mobile: data.mobile,
        name: data.name,
      },
    };
    const myRequest = props.add
      ? axios.post("http://localhost:3000/api/v1/addresses", axiosData, {
          headers: {
            authorization: Cookies.get("rails-token"),
          },
        })
      : axios.put(
          `http://localhost:3000/api/v1/addresses/${params.address_id}`,
          axiosData,
          {
            headers: {
              authorization: Cookies.get("rails-token"),
            },
          }
        );

    myRequest
      .then((response) => {
        if (response.status == 200) {
          dispatch(setStatus({ message: "Address added", type: "info" }));
          return navigate(`/user/profile/${authState}`);
        }
      })
      .catch((e) => dispatch(setStatus({})));
  };
  const pinHandler = (event) => {
    axios
      .get(`https://api.postalpincode.in/pincode/${event.target.value}`)
      .then((response) => {
        if (response.data[0].Status == "Success") {
          console.log(response);
          setValue("locality", response.data[0].PostOffice[0].Name);
          setValue("city", response.data[0].PostOffice[0].Block);
        }
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/address_type")
      .then((response) => setaddType(response.data))
      .catch((e) => dispatch(setStatus({})));
    if (!props.add) {
      axios
        .get(`http://localhost:3000/api/v1/addresses/${params.address_id}`)
        .then((response) => {
          let address = response.data;
          setValue("name", address.name);
          setValue("mobile", address.mobile);
          setValue("pincode", address.pincode);
          setValue("address", address.address);
          setValue("city", address.city);
          setValue("type", address.address_type._id.$oid);
          setValue("locality", address.locality);
        });
    }
  }, []);
  return (
    <MComponents.Container maxWidth="md" sx={{ my: 2 }}>
      <Usernav />
      <MComponents.Typography variant="overline" marginBottom={1}>
        {props.add ? "Add Address" : "Change Address"}
      </MComponents.Typography>
      <MComponents.Paper
        sx={{ my: 2, p: 2 }}
        component="form"
        noValidate
        elevation={20}
        autoComplete="off"
        onSubmit={handleSubmit(formHandler)}
      >
        <MComponents.Stack spacing={3}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MComponents.TextField
                {...field}
                type="text"
                label="Name"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                helperText={errors.address && "Enter a valid name."}
                error={errors.address && true}
              />
            )}
          />
          <Controller
            name="address"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MComponents.TextField
                {...field}
                type="text"
                label="Address"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                helperText={errors.address && "Enter a valid address."}
                error={errors.address && true}
              />
            )}
          />
          <Controller
            name="pincode"
            control={control}
            rules={{ required: true, validate: pincodeValid }}
            render={({ field }) => (
              <MComponents.TextField
                {...field}
                type="text"
                label="Pincode"
                onBlur={(e) => pinHandler(e)}
                variant="standard"
                InputLabelProps={{ shrink: true }}
                error={errors.pincode && true}
                helperText={errors.pincode && "Enter a valid pincode."}
              />
            )}
          />
          <Controller
            name="locality"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MComponents.TextField
                {...field}
                variant="standard"
                label="Locality"
                type="text"
                defaultValue=""
                InputLabelProps={{ shrink: true }}
                error={errors.locality && true}
                helperText={errors.locality && "Can't be blank"}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MComponents.TextField
                {...field}
                type="text"
                variant="standard"
                label="City"
                defaultValue=""
                InputLabelProps={{ shrink: true }}
                error={errors.city && true}
                helperText={errors.city && "Can't be blank"}
              />
            )}
          />
          <Controller
            name="mobile"
            control={control}
            rules={{ required: true, validate: mobileValid }}
            render={({ field }) => (
              <MComponents.TextField
                {...field}
                type="text"
                variant="standard"
                label="Mobile"
                InputLabelProps={{ shrink: true }}
                error={errors.mobile && true}
                helperText={errors.mobile && "Invalid mobile number"}
              />
            )}
          />
          <MComponents.FormControl>
            <MComponents.Select
              defaultValue="init"
              variant="standard"
              {...register("type", {
                required: true,
                validate: (value) => value !== "init",
              })}
              error={errors.type && true}
            >
              <MComponents.MenuItem value="init" disabled selected>
                Select address type
              </MComponents.MenuItem>
              {addType &&
                addType.map((item) => (
                  <MComponents.MenuItem value={item._id.$oid}>
                    {item.type} ({item.time})
                  </MComponents.MenuItem>
                ))}
            </MComponents.Select>
            {errors.type && (
              <MComponents.FormHelperText sx={{ color: "error.main", m: 0 }}>
                Select a valid time slot.
              </MComponents.FormHelperText>
            )}
          </MComponents.FormControl>
          <MComponents.Typography variant="subtitle2">
            Note: First input your pincode, your location will be fetched based
            on. Fetched location may not be accurate, you are requested to
            update the same if found incorrect.
          </MComponents.Typography>
          <MComponents.Button variant="contained" type="submit">
            {props.add ? "Add" : "Change"}
          </MComponents.Button>
        </MComponents.Stack>
      </MComponents.Paper>
    </MComponents.Container>
  );
};
export default EditAddress;
