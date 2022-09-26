import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MComponents } from "../MUIExporter";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
const CategoryBar = () => {
  const authCtx = useContext(AuthContext);
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/api/v1/category")
      .then((response) => setData(response.data))
      .catch((e) => authCtx.setStatus(e.response));
  }, []);
  return (
    <MComponents.Stack sx={{ m: 2 }}>
      <MComponents.Breadcrumbs aria-label="breadcrumb">
        {data &&
          data.map((item) => (
            <MComponents.Chip
              label={item.name}
              component={Link}
              key={Math.random()}
              to={`category/${item.slug}`}
              clickable
              color="primary"
              sx={{ textTransform: "capitalize" }}
            />
          ))}
      </MComponents.Breadcrumbs>
    </MComponents.Stack>
  );
};
export default CategoryBar;
