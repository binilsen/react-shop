import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MComponents } from "../../MUIExporter";
const Address = (props) => {
  return (
    <MComponents.Grid item md={4}>
      <MComponents.Card sx={{ height: "100%" }}>
        <MComponents.CardActionArea>
          <MComponents.CardContent>
            {props.data.name}, <br />
            {props.data.address}, <br />
            {props.data.locality}, <br />
            {props.data.city}, <br />
            {props.data.state} <br />
            {props.data.mobile} <br />
            Type: {props.data.address_type.type}
            <br />
            Delivery time: {props.data.address_type.time}
          </MComponents.CardContent>
        </MComponents.CardActionArea>
        <MComponents.CardActions>
          <MComponents.Button
            variant="contained"
            color="secondary"
            size="small"
            component={Link}
            to={`edit-address/${props.data._id.$oid}`}
          >
            Edit
          </MComponents.Button>
        </MComponents.CardActions>
      </MComponents.Card>
    </MComponents.Grid>
  );
};
export default Address;
