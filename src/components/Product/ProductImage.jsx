import { useState } from "react";
import noImage from "./../../assets/loadingImage.svg";
const ProductImage = (props) => {
  const [isLoading, setLoading] = useState(true);
  const style = isLoading ? "d-none" : "img img-thumbnail w-50";
  return (
    <div className="col">
      {isLoading && <img src={noImage} className="img img-thumbnail rounded-pill w-50" />}
      <img
        onLoad={() => {
          setLoading(false);
        }}
        src={props.image}
        alt="Product logo"
        className={style}
      />
    </div>
  );
};
export default ProductImage;
