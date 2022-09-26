import { Icons, MComponents } from "../MUIExporter";
import Address from "./Address";
import { useState } from "react";
import OrderOverview from "./OrderOverview";
const ProcessCart = () => {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = (value) => {
    setIsChecked(value);
  };
  return (
    <MComponents.Container maxWidth="lg" sx={{ my: 4 }}>
      <MComponents.Paper sx={{ p: 2 }} elevation={5}>
        {!isChecked && (
          <MComponents.Stack spacing={1}>
            <MComponents.Typography variant="overline" borderBottom={1}>
              Select an address
            </MComponents.Typography>
            <MComponents.RadioGroup name="radio-address">
              <MComponents.Grid container spacing={1}>
                <Address actionHandler={checkHandler} />
                <Address actionHandler={checkHandler} />
                <Address actionHandler={checkHandler} />
                <Address actionHandler={checkHandler} />
              </MComponents.Grid>
            </MComponents.RadioGroup>
          </MComponents.Stack>
        )}
        {isChecked && <OrderOverview/>}
      </MComponents.Paper>
    </MComponents.Container>
  );
};
export default ProcessCart;
