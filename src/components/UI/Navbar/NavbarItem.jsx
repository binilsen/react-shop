import { MComponents } from "../../MUIExporter";
import { Link as RouterLink } from "react-router-dom";
const NavItem = (props) => {
  return (
    <MComponents.Link component={RouterLink} to={props.to}>
      <MComponents.Tooltip title={props.title} arrow>
        <MComponents.IconButton size="large" onClick={props.onClick || null}>
          <MComponents.Avatar
            sx={{ bgcolor: "secondary.main", color: "primary.main" }}
            src={props.image}
          >
            {props.children}
          </MComponents.Avatar>
        </MComponents.IconButton>
      </MComponents.Tooltip>
    </MComponents.Link>
  );
};
export default NavItem;
