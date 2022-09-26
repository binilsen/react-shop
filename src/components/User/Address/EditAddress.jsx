import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MComponents } from "../../MUIExporter";
import Input from "../../UI/Input";
import { pincodeValid } from "../../Utilites/Validation";
const EditAddress = () => {
  const [locationDetails, setLocationDetails] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const formHandler = (data) => {
    console.log(data);
  };
  const pinHandler = (event) => {
    console.log(event.target.value);
      axios
        .get(`https://api.postalpincode.in/pincode/${event.target.value}`)
        .then((response) => {
          if (response.data.status == 'Success')
            setLocationDetails(response.data)
        });
    
  };
  return (
    <MComponents.Container maxWidth="md" sx={{ my: 2, height: "100vh" }}>
      <MComponents.Typography variant="overline" marginBottom={1}>
        Change Address
      </MComponents.Typography>
      <MComponents.Paper
        sx={{ my: 2, p: 2 }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(formHandler)}
      >
        <MComponents.Stack spacing={1}>
          <Input
            type="text"
            name="address"
            fields={{ ...register("address", { required: "true" }) }}
            error={errors.address && "Enter a valid address."}
          />
          <Input
            type="text"
            name="pincode"
            fields={{
              ...register("pincode", {
                required: true,
                validate: pincodeValid,
                onChange: pinHandler,
              }),
            }}
            error={errors.pincode && "Enter a valid pincode."}
          />
          <Input
            type="text"
            name="locality"
            fields={{ ...register("locality", { required: true }) }}
            error={errors.locality && "Can't be blank"}
          />
          <Input
            type="text"
            name="city"
            fields={{ ...register("city", { required: true }) }}
            error={errors.city && "Can't be blank"}
          />
          <MComponents.Button variant="contained" type="submit">
            Change
          </MComponents.Button>
        </MComponents.Stack>
      </MComponents.Paper>
    </MComponents.Container>
  );
};
export default EditAddress;
