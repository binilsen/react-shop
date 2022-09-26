import { MComponents, Icons } from "../MUIExporter";
import CartAction from "./CartAction";
const OrderOverview = () => {
  return (
    <MComponents.Stack spacing={2}>
      <MComponents.Typography variant="overline" borderBottom={1}>
        Order Overview
      </MComponents.Typography>

      <MComponents.Paper elevation={5} sx={{ p: 3, my: 2 }}>
        <MComponents.Grid container spacing={3} minHeight="200px">
          <MComponents.Grid item md={4} sm={12} xs={12}>
            <MComponents.Typography variant="overline">
              Selected address:
            </MComponents.Typography>
            <MComponents.Paper
              sx={{
                p: 3,
                bgcolor: "primary.main",
                color: "secondary.main",
              }}
              elevation={10}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, minima?
            </MComponents.Paper>
          </MComponents.Grid>
          <MComponents.Grid item md={4} sm={12} xs={12}>
            <MComponents.Stack spacing={2}>
              <MComponents.Typography variant="overline">
                <Icons.CurrencyRupee /> Payment Mode:
              </MComponents.Typography>
              <MComponents.Button variant="outlined">
                Cash on delivery
              </MComponents.Button>
            </MComponents.Stack>
          </MComponents.Grid>
          <MComponents.Grid item md={4} sm={12} xs={12}>
            <MComponents.Stack>
              <MComponents.Typography variant="overline" marginBottom={2}>
                Amount to be paid:
              </MComponents.Typography>
              <MComponents.Typography
                variant="h4"
                bgcolor="secondary.main"
                textAlign="center"
              >
                <Icons.CurrencyRupee />
                320.00
              </MComponents.Typography>
            </MComponents.Stack>
          </MComponents.Grid>
        </MComponents.Grid>
        <CartAction />
      </MComponents.Paper>
    </MComponents.Stack>
  );
};
export default OrderOverview;
