import styles from "./Product.module.css";
import ProductImage from "./ProductImage";

const Product = (props) => {
  return (
    <>
      <div className={`row p-2 my-2 ${styles.product} align-items-center`}>
        <div className="col-sm-3">
          {<ProductImage image={props.product.thumbnail} />}
        </div>
        <div className="col-sm-5">
          <h1 className="fs-4 mb-3">{props.product.name}</h1>
          <p className={`${styles["text-justify"]} small`}>
            {props.product.title + "..."}
          </p>
        </div>
        <div className="col-sm-4">
          <div className="row">
            <div className="col-sm-12 col-md-6 p-2">
              <button className="btn btn-light">
                Stock:
                <span className="text-danger fs-4"> {props.product.stock}</span>
              </button>
            </div>
            <div className="col-sm-12 col-md-6 p-2">
              <button className="btn btn-light">
                Price:
                <span className="text-danger fs-4">
                  {" "}
                  ${props.product.price}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
