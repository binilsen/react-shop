import { Icons, MComponents } from "../MUIExporter";
import success from "../../assets/orderSuccess.svg";
const OrderSuccess = () => {
  return (
    <>
      <MComponents.Grid
        container
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <MComponents.Grid
          item
          md={6}
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            background: `url(${success}) center no-repeat`,
            backgroundSize: "contain",
          }}
          height="100%"
        />
        <MComponents.Grid item md={6} textAlign="center">
          <MComponents.Typography variant="h3" fontWeight="bolder" padding={5}>
            Order Successfull
            <Icons.Check fontSize="5px" />
          </MComponents.Typography>
        </MComponents.Grid>
      </MComponents.Grid>
    </>
  );
};
export default OrderSuccess;
