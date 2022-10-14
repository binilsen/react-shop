import { MComponents } from "../../MUIExporter";
import { Link } from "react-router-dom";
import priceFormatter from "../../Utilites/priceFormatter";
const Order = (props) => {
  const date = new Date(props.date).toDateString();

  return (
    <MComponents.Card sx={{ color: "primary.main", bgcolor: "secondary.main" }}>
      <MComponents.CardActionArea component={Link} to={`orders/${props.id}`}>
        <MComponents.CardContent>
          <MComponents.Grid container justifyContent="center">
            <MComponents.Grid item xs={12} sm={12} md={6}>
              <MComponents.Typography
                textTransform="uppercase"
                variant="subtitle1"
              >
                RS{props.id}
              </MComponents.Typography>
            </MComponents.Grid>
            <MComponents.Grid item xs={12} sm={12} md={3}>
              <MComponents.Typography variant="subtitle2">
                {date}
              </MComponents.Typography>
            </MComponents.Grid>
            <MComponents.Grid item xs={12} sm={12} md={3}>
              <MComponents.Typography variant="caption">
                {priceFormatter(props.amount)}
              </MComponents.Typography>
            </MComponents.Grid>
          </MComponents.Grid>
        </MComponents.CardContent>
      </MComponents.CardActionArea>
    </MComponents.Card>
  );
};
export default Order;
