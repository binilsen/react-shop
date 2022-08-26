import ProductContainer from "./ProductContainer";
import useFetchData from "../../hooks/useFetchData";
import Loader from "./../Utilites/Loader";
import Category from "../UI/Category";
const ProductList = () => {
  const { isLoading, apiData, serverError } = useFetchData({
    url: "http://127.0.0.1:3000",
  });
  return (
    <>
      {/* <Category /> */}
      {serverError && !isLoading && (
        <h1 className="alert text-capitalize alert-danger w-50 mx-auto rounded p-2 my-3 text-center">
          {serverError}
        </h1>
      )}
      {isLoading && <Loader />}
      {!isLoading && !serverError && apiData && (
        <ProductContainer products={apiData} />
      )}
    </>
  );
};

export default ProductList;
