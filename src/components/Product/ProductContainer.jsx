import Product from "./Product";
import styles from "./ProductContainer.module.css";
const ProductContainer = (props) => {
  return (
    <>
      <div className={`container p-3  ${styles["product-container"]}`}>
        <div className="row">
          {props.products.map((data) => (
            <Product
              product={data}
              key={Math.random(1)}
              weight={props.products.included}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
