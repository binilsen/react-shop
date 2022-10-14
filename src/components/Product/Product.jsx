import { useState } from "react";
import { MComponents, Colors } from "../MUIExporter";
import priceFormatter from "../Utilites/priceFormatter";
import { Link } from "react-router-dom";
import { DefaultLoader } from "../Utilites/Loader";
import { useSelector } from "react-redux";
import ProductActions from "./ProductAction";
const Product = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const userId = useSelector((state) => state.authReducer.userId);
  return (
    <>
      <MComponents.Grid item sm={12} md={4}>
        <MComponents.Card sx={{ height: "100%" }}>
          <MComponents.CardActionArea
            component={Link}
            to={`/category/${props.product.category._slugs[0]}/${props.product._slugs}`}
          >
            {isLoaded && (
              <MComponents.CardMedia
                component="img"
                image={props.product.thumbnail}
                height="240"
                width="100"
                sx={{ objectFit: "contain" }}
              />
            )}
            {!isLoaded && (
              <MComponents.CardMedia sx={{ textAlign: "center", p: 3 }}>
                <DefaultLoader />
              </MComponents.CardMedia>
            )}
            <img
              hidden
              src={props.product.thumbnail}
              onLoad={() => setIsLoaded(true)}
            />

            <MComponents.CardContent>
              <MComponents.Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <MComponents.Typography variant="h6" component="span">
                  {props.product.name}
                </MComponents.Typography>
                <MComponents.Button variant="outlined" size="small">
                  {priceFormatter(props.product.price)}
                </MComponents.Button>
              </MComponents.Stack>
              <MComponents.Rating defaultValue={3} readOnly />
              <MComponents.Typography variant="body2" component={"span"}>
                {props.product.title.substring(0, 40) + "..."}
              </MComponents.Typography>
            </MComponents.CardContent>
          </MComponents.CardActionArea>
          <MComponents.CardActions
            sx={{ justifyContent: "center", bgcolor: Colors.blueGrey[100] }}
          >
            <ProductActions id={props.product._id.$oid} />
          </MComponents.CardActions>
        </MComponents.Card>
      </MComponents.Grid>
    </>
  );
};

export default Product;
