import ProductContainer from "./ProductContainer";
import { useEffect, useState } from "react";
import { MComponents } from "../MUIExporter";
import { DefaultLoader } from "../Utilites/Loader";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/products")
      .then((res) => {
        if (res.status != 200) setError("Error");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => setError("Unable to connect."))
      .finally((cleanup) => setLoading(false));
  }, []);

  return (
    <>
      {error && !isLoading && (
        <MComponents.Alert
          severity="error"
          variant="filled"
          sx={{ my: 3, width: "50%", mx: "auto" }}
        >
          {error}
        </MComponents.Alert>
      )}
      {isLoading && <DefaultLoader />}

      {!isLoading && !error && products && (
        <ProductContainer products={products} />
      )}
    </>
  );
};

export default ProductList;
