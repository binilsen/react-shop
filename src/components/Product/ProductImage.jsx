import { useState } from "react";
import { Colors, MComponents } from "../MUIExporter";
const ProductImage = (props) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="col">
      {isLoading && (
        <MComponents.Skeleton
          variant="rectangular"
          animation="pulse"
          height="240"
          width="100"
          sx={{ bgcolor: Colors.grey[900] }}
        />
      )}
      <img
        onLoad={() => {
          setLoading(false);
        }}
        src={props.image}
        alt="Product logo"
      />
    </div>
  );
};
export default ProductImage;
