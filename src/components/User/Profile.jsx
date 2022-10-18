import { Icons, MComponents } from "../MUIExporter";
import { useState } from "react";
import PanelAccount from "./Panel/PanelAccount";
import { TabPanel, a11yProps } from "../Utilites/TabPanel";
import PanelOrders from "./Panel/PanelOrders";
import PanelHelp from "./Panel/PanelHelp";
const Profile = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <MComponents.Typography
        variant="h5"
        align="center"
        width="50%"
        margin="auto"
        bgcolor="secondary.main"
      >
        <Icons.AdminPanelSettingsOutlined fontSize="large" />
        User Central
      </MComponents.Typography>
      <MComponents.Container maxWidth="md">
        <MComponents.Box>
          <MComponents.Tabs
            value={value}
            onChange={handleChange}
            aria-label="user home"
            centered
            scrollButtons="auto"
          >
            <MComponents.Tab label="Account" {...a11yProps(0)} />
            <MComponents.Tab label="Orders" {...a11yProps(1)} />
            <MComponents.Tab label="Help" {...a11yProps(2)} />
          </MComponents.Tabs>
          <TabPanel value={value} index={0}>
            <PanelAccount />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PanelOrders />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <PanelHelp />
          </TabPanel>
        </MComponents.Box>
      </MComponents.Container>
    </div>
  );
};

export default Profile;
