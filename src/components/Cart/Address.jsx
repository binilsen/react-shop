import { MComponents } from "../MUIExporter";
const Address = (props) => {
  const radioHandler = (event) => {
    props.actionHandler(event.target.checked);
  };
  return (
    <MComponents.Grid item xs={12} md={6}>
      <MComponents.Paper sx={{ p: 1 }}>
        <MComponents.Stack direction="row" justifyContent="space-between">
          <MComponents.Radio value={Math.random()} onChange={radioHandler} />
        </MComponents.Stack>
        <MComponents.Typography variant="body1" margin={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          consequuntur?
        </MComponents.Typography>
      </MComponents.Paper>
    </MComponents.Grid>
  );
};
export default Address;
