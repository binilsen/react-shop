import { Link } from "react-router-dom";
import { MComponents } from "../../MUIExporter";
const Address = () => {
  return (
    <MComponents.Grid item md={4}>
      <MComponents.Card sx={{ height: "100%" }}>
        <MComponents.CardActionArea>
          <MComponents.CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            asperiores accusantium commodi nostrum explicabo fuga sed iure odio
            obcaecati voluptatem deserunt, labore dolorem, voluptates ratione
            dolor vel suscipit saepe doloribus?
          </MComponents.CardContent>
        </MComponents.CardActionArea>
        <MComponents.CardActions>
          <MComponents.Button
            variant="contained"
            color="secondary"
            size="small"
            component={Link}
            to="/profile/edit-address"
          >
            Edit
          </MComponents.Button>
        </MComponents.CardActions>
      </MComponents.Card>
    </MComponents.Grid>
  );
};
export default Address;
