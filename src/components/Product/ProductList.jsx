import ProductContainer from "./ProductContainer";
import useFetchData from "../../hooks/useFetchData";
import Loader from "./../Utilites/Loader";
import Category from "../UI/Category";
const ProductList = () => {
  const { isLoading, apiData, serverError } = useFetchData({
    url: "http://127.0.0.1:3000/api/v1/products",
  });
  return (
    <>
      {/* <Category /> */}
      {serverError && !isLoading && (
        <p className="alert text-capitalize alert-info w-50 mx-auto rounded  my-3 text-center">
          {serverError}
        </p>
      )}
      {isLoading && <Loader />}
      {!isLoading && !serverError && apiData && (
        <ProductContainer products={apiData} />
      )}
    </>
  );
};

export default ProductList;
