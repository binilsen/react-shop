import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { MComponents } from "../MUIExporter";
import ProductInfo from "./ProductInfo";
import Loader from "../Utilites/Loader";
const ProductDetails = () => {
  const id = useParams();
  const [productData, setProductData] = useState();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/api/v1/products/${id.item}`)
      .then((response) => setProductData(response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {!productData && <Loader />}
      {productData && (
        <MComponents.Container sx={{ height: "100vh" }}>
          <MComponents.Stack
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <MComponents.Paper elevation={20} sx={{ p: 2, my: 3 }}>
              <MComponents.Grid
                container
                justifyContent="center"
                alignItems="center"
              >
                <MComponents.Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  alignSelf="center"
                  textAlign="center"
                >
                  <img
                    src={productData.data.thumbnail}
                    style={{
                      objectFit: "contain",
                    }}
                    height="300px"
                    width="auto"
                  />
                </MComponents.Grid>
                <MComponents.Grid item xs={12} sm={6} md={6}>
                  <ProductInfo data={productData.data} />
                </MComponents.Grid>
              </MComponents.Grid>
            </MComponents.Paper>
          </MComponents.Stack>
        </MComponents.Container>
      )}
    </>
  );
};
export default ProductDetails;
