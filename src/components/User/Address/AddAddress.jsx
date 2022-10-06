import { MComponents } from "../../MUIExporter";
import Usernav from "../../UI/Navbar/Usernav";
import React from "react";
import EditAddress from "./EditAddress";
class AddAddress extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MComponents.Container
        maxWidth="md"
        sx={{ my: 4, bgcolor: "background.paper", p: 2 }}
      >
        <EditAddress add={true} />
      </MComponents.Container>
    );
  }
}

export default AddAddress;
