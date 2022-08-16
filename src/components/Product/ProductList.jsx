import ProductContainer from "./ProductContainer";
import { useCallback, useEffect, useState } from "react";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const [token, setToken] = useState(props.token);
  const resetState = () => {
    setError(null);
    setLoading(true);
    setProducts([]);
  };
  const fetchProducts = useCallback(async () => {
    resetState();
    fetch("http://127.0.0.1:3000/api/v1/products", {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        if (res.status != 200) setError('Error');
        return res.json()
      })
      .then((data) => { setProducts(data);  console.log(data);})
      .catch((error) => setError("unable to connect."))
      .finally((cleanup) => setLoading(false));
  }, [token]);

  useEffect(() => {
    setToken(props.token);
    resetState();
    fetchProducts();
  }, [props.token, fetchProducts]);

  return (
    <>
      {error && !isLoading && (
        <h1 className="alert text-capitalize alert-danger w-50 mx-auto rounded p-2 my-3 text-center">
          {error}
        </h1>
      )}
      {isLoading && (
        <h1 className="text-center alert alert-info   texmy-3 w-50 mx-auto border rounded p-2">
          Loading Products....
        </h1>
      )}
      {!isLoading && !error && <ProductContainer products={products} />}
    </>
  );
};

export default ProductList;
