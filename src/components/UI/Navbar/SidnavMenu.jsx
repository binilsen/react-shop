import { MComponents } from "../../MUIExporter";
import AuthContext from "../../../store/auth-context";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
const SidenavMenu = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.onLogout();
    authCtx.setStatus({ message: "Logged out successfully", type: "success" });
  };
  return (
    <MComponents.List>
      <MComponents.ListItem sx={{ px: 0 }}>
        <MComponents.Link component={RouterLink} to="/" underline="hover">
          <MComponents.ListItemButton>Home</MComponents.ListItemButton>
        </MComponents.Link>
      </MComponents.ListItem>
      {!authCtx.isLoggedIn && (
        <MComponents.ListItem sx={{ px: 0 }}>
          <MComponents.Link component={RouterLink} to="user" underline="hover">
            <MComponents.ListItemButton>Account</MComponents.ListItemButton>
          </MComponents.Link>
        </MComponents.ListItem>
      )}
      {authCtx.isLoggedIn && (
        <MComponents.ListItem sx={{ px: 0 }}>
          <MComponents.Link
            component={RouterLink}
            to="profile"
            underline="hover"
          >
            <MComponents.ListItemButton>Profile</MComponents.ListItemButton>
          </MComponents.Link>
        </MComponents.ListItem>
      )}
      {authCtx.isLoggedIn && (
        <MComponents.ListItem sx={{ px: 0 }}>
          <MComponents.Link component={RouterLink} to="/" underline="hover">
            <MComponents.ListItemButton onClick={logoutHandler}>
              Logout
            </MComponents.ListItemButton>
          </MComponents.Link>
        </MComponents.ListItem>
      )}
    </MComponents.List>
  );
};

export default SidenavMenu;
