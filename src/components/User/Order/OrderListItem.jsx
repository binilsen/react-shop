import { MComponents } from "../../MUIExporter";
import { Link } from "react-router-dom";
const Order = () => {
  return (
    <MComponents.Card sx={{ color: "primary.main", bgcolor: "secondary.main" }}>
      <MComponents.CardActionArea component={Link} to="order">
        <MComponents.CardContent>
          <MComponents.Grid container justifyContent="center">
            <MComponents.Grid item xs={12} sm={12} md={4}>
              <MComponents.Typography variant="subtitle1">
                RS3232324343434
              </MComponents.Typography>
            </MComponents.Grid>
            <MComponents.Grid item xs={12} sm={12} md={4}>
              <MComponents.Typography variant="subtitle2">
                20 Jan 2022
              </MComponents.Typography>
            </MComponents.Grid>
            <MComponents.Grid item xs={12} sm={12} md={4}>
              <MComponents.Typography variant="caption">
                $200.22
              </MComponents.Typography>
            </MComponents.Grid>
          </MComponents.Grid>
        </MComponents.CardContent>
      </MComponents.CardActionArea>
    </MComponents.Card>
  );
};
export default Order;
