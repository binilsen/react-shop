import Product from "./Product";
import { MComponents } from "../MUIExporter";
const ProductContainer = (props) => {
  return (
    <>
      <MComponents.Container sx={{ my: 2 }}>
        <MComponents.Grid container spacing={2}>
          {props.products.map((data) => (
            <Product product={data} key={Math.random(1)} />
          ))}
        </MComponents.Grid>
      </MComponents.Container>
    </>
  );
};

export default ProductContainer;
