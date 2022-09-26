import { MComponents, bgWhite } from "../../MUIExporter";
import SocialLinks from "./SocialLinks";
const Footer = () => {
  return (
    <MComponents.Grid
      container
      sx={{
        bgcolor: bgWhite,
        color: "primary.main",
        flexFlow: { sm: "column", md: "row" },
        height: "fit-content",
        p: 2,
      }}
    >
      <MComponents.Grid item sm={12} xs={12} md={6} sx={{ p: 1 }}>
        <MComponents.Typography variant="h4">React Shop</MComponents.Typography>
        <MComponents.Typography variant="caption">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          officiis.
        </MComponents.Typography>
      </MComponents.Grid>

      <MComponents.Grid item sm={12} xs={12} sx={{ p: 2 }} md={6}>
        <SocialLinks />
      </MComponents.Grid>
    </MComponents.Grid>
  );
};
export default Footer;
