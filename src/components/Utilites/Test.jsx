import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { MComponents } from "./../MUIExporter";
const Test = () => {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setData(response.data);
      });
  }, []);
  const handler = (event) => {
    const {
      target: { value },
    } = event;
    setList(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      {data && (
        <MComponents.Container maxWidth="md">
          <MComponents.InputLabel>Select</MComponents.InputLabel>
          <MComponents.Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={list}
            label="Age"
            defaultValue="init"
            multiple
            fullWidth
            renderValue={(selected) => { console.log(selected); return selected.join(", ") }}
            onChange={handler}
          >
            <MComponents.MenuItem value="init" selected disabled>
              Select one
            </MComponents.MenuItem>
            {data.map((name) => (
              <MComponents.MenuItem key={name} value={name}>
                <MComponents.Checkbox checked={list.indexOf(name) > -1} />
                <MComponents.ListItemText primary={name} />
              </MComponents.MenuItem>
            ))}
          </MComponents.Select>
        </MComponents.Container>
      )}
    </>
  );
};
export default Test;
