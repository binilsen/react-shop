import { MComponents, Icons, Colors } from "../../MUIExporter";
import NavbarMenu from "./NavbarMenu";
import SidenavMenu from "./SidnavMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navToggler = () => {
    setIsMobile((prevState) => !prevState);
  };
  // const isLoginValid = localStorage.getItem("login_valid");
  return (
    <MComponents.AppBar
      sx={{ bgcolor: "primary.main", py: 1 }}
      position="static"
    >
      <MComponents.Toolbar>
        <MComponents.IconButton
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={navToggler}
        >
          <Icons.Menu />
          <MComponents.Drawer
            anchor="left"
            open={isMobile}
            ModalProps={{ keepMounted: true }}
          >
            <MComponents.Stack
              sx={{ p: 3, justifyContent: "center", alignItems: "center" }}
            >
              <MComponents.Typography variant="h5" component={Link} to="/">
                React Shop
              </MComponents.Typography>
              <MComponents.Divider sx={{ bgcolor: Colors.teal[500], my: 1 }} />
              <SidenavMenu />
            </MComponents.Stack>
          </MComponents.Drawer>
        </MComponents.IconButton>
        <MComponents.Typography
          variant="h4"
          component={Link}
          sx={{ textDecoration: "none", color: "secondary.main" }}
          to="/"
        >
          React Shop
        </MComponents.Typography>
        {/* Appbar menu */}
        <MComponents.Stack
          direction="row"
          sx={{
            justifyContent: "flex-end",
            alignItems: "center",
            flexGrow: 1,
            display: { xs: "none", sm: "flex" },
          }}
        >
          <NavbarMenu />
        </MComponents.Stack>
        {/* Appbar menu end here */}
      </MComponents.Toolbar>
    </MComponents.AppBar>
  );
};

export default Navbar;
