import { MComponents } from "../MUIExporter";
import ProductList from "../Product/ProductList";
import { a11yProps, TabPanel } from "../Utilites/TabPanel";
import { useState } from "react";
const CategoryContainer = () => {
  const [value, setValue] = useState(0);
  const changeHandler = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <MComponents.Container sx={{ my: 3 }}>
      <MComponents.Tabs
        value={value}
        onChange={changeHandler}
        orientation="horizontal"
        centered
        scrollButtons="auto"
      >
        <MComponents.Tab label="Trending Deals" {...a11yProps(0)} />
      </MComponents.Tabs>
      <TabPanel value={value} index={0}>
        <ProductList />
      </TabPanel>
    </MComponents.Container>
  );
};
export default CategoryContainer;
