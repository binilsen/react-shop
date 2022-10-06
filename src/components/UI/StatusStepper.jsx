import { MComponents, Icons } from "../MUIExporter";
const StatusStepper = () => {
  return (
    <MComponents.Box sx={{ my: 3, p: 1 }} component={MComponents.Paper}>
      <MComponents.Stepper>
        <MComponents.Step key="Ordered">
          <MComponents.StepLabel
            StepIconProps={{
              active: true,
              icon: <Icons.Archive />,
              completed: true,
            }}
            sx={{ color: "error.dark" }}
          >
            Ordered
          </MComponents.StepLabel>
        </MComponents.Step>
        <MComponents.Step key="Shipped">
          <MComponents.StepLabel
            StepIconProps={{
              active: true,
              icon: <Icons.LocalShipping />,
              completed: true,
            }}
          >
            Shipped
          </MComponents.StepLabel>
        </MComponents.Step>
        <MComponents.Step key="Delivered">
          <MComponents.StepLabel
            StepIconProps={{
              active: true,
              icon: <Icons.CheckCircleOutline />,
              completed: true,
            }}
          >
            Delivered
          </MComponents.StepLabel>
        </MComponents.Step>
      </MComponents.Stepper>
    </MComponents.Box>
  );
};
export default StatusStepper;
