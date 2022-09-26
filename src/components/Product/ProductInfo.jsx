import { MComponents } from "../MUIExporter";
import priceFormatter from "../Utilites/priceFormatter";
const ProductInfo = (props) => {
  return (
    <MComponents.Grid
      container
      direction="column"
      justifyContent="space-evenly"
    >
      <MComponents.Grid item>
        <MComponents.Typography variant="h4">
          {props.data.name}
        </MComponents.Typography>
        <MComponents.Typography variant="caption">
          By Apple
        </MComponents.Typography>
      </MComponents.Grid>
      <MComponents.Grid item>
        <MComponents.Rating
          name="half-rating-read"
          defaultValue={Number.parseInt(2)}
          readOnly
        />
      </MComponents.Grid>
      <MComponents.Grid item>
        <MComponents.Typography variant="h4">
          {priceFormatter(props.data.price)}
        </MComponents.Typography>
      </MComponents.Grid>
      <MComponents.Grid item>
        <MComponents.Typography variant="overline" borderBottom={1}>
          Product Description:
        </MComponents.Typography>
        <MComponents.Typography
          variant="body1"
          textAlign="justify"
          color="primary"
        >
          {props.data.title}
        </MComponents.Typography>
      </MComponents.Grid>
      <MComponents.Grid item>
        <MComponents.Stack direction="row" justifyContent="space-evenly">
          <MComponents.Button variant="contained" color="secondary">
            Buy now
          </MComponents.Button>
          <MComponents.Button variant="contained" color="secondary">
            Add to cart
          </MComponents.Button>
        </MComponents.Stack>
      </MComponents.Grid>
    </MComponents.Grid>
  );
};

export default ProductInfo;
