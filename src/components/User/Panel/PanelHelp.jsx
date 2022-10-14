import { Icons, MComponents } from "../../MUIExporter";
const PanelHelp = () => {
  return (
    <MComponents.Stack spacing={3} height="500px">
      <MComponents.Button sx={{ p: 3 }} variant="contained" color="primary">
        <Icons.Email sx={{ mx: 1 }} /> Email us
      </MComponents.Button>
      <MComponents.Button sx={{ p: 3 }} variant="contained" color="primary">
        <Icons.Phone sx={{ mx: 1 }} /> Contact us
      </MComponents.Button>
      <MComponents.Button sx={{ p: 3 }} variant="contained" color="primary">
        <Icons.Chat sx={{ mx: 1 }} /> Chat with us
      </MComponents.Button>
    </MComponents.Stack>
  );
};
export default PanelHelp;
