import ProductContainer from "./ProductContainer";
import { useCallback, useEffect, useState } from "react";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const resetState = () => {
    setError(null);
    setLoading(true);
    setProducts([]);
  };

  useEffect(() => {
    resetState();
    fetch("http://127.0.0.1:3000/api/v1/products", {})
      .then((res) => {
        if (res.status != 200) setError("Error");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => setError("unable to connect."))
      .finally((cleanup) => setLoading(false));
  }, []);

  return (
    <>
      {error && !isLoading && (
        <h1 className="alert text-capitalize alert-danger w-50 mx-auto rounded p-2 my-3 text-center">
          {error}
        </h1>
      )}
      {isLoading && (
        <h1 className="text-center alert alert-info my-3 w-50 mx-auto border rounded p-2">
          Loading Products....
        </h1>
      )}
      {!isLoading && !error && products && (
        <ProductContainer products={products} />
      )}
    </>
  );
};

export default ProductList;
