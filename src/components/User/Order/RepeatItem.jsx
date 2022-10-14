import { Icons, MComponents } from "../../MUIExporter";
import { useEffect, useState } from "react";
import priceFormatter from "../../Utilites/priceFormatter";
import { Controller } from "react-hook-form";
const RepeatItem = (props) => {
  const [productSum, setproductSum] = useState(
    props.product.price * props.quantity
  );
  const [quantity, setQuantity] = useState(props.quantity);
  const quantityHandler = (add = true) => {
    const quantity = props.getValues(props.product._id.$oid);
    if (add) {
      props.setValue(props.product._id.$oid, quantity + 1);
      setQuantity(quantity + 1);
    } else {
      props.setValue(props.product._id.$oid, quantity - 1);
      setQuantity(quantity - 1);
    }
  };
  useEffect(() => {
    setproductSum(props.product.price * quantity);
    props.updateHandler();
  }, [quantity]);
  return (
    <MComponents.TableRow>
      <MComponents.TableCell>{props.product.name}</MComponents.TableCell>
      <MComponents.TableCell>
        {priceFormatter(props.product.price)}
      </MComponents.TableCell>
      <MComponents.TableCell align="center">
        <MComponents.Stack spacing={1} direction="row" justifyContent="center">
          {quantity == 1 ? (
            <MComponents.Button size="small" variant="outlined" disabled>
              <Icons.Remove />
            </MComponents.Button>
          ) : (
            <MComponents.Button
              size="small"
              variant="outlined"
              onClick={() => quantityHandler(false)}
            >
              <Icons.Remove />
            </MComponents.Button>
          )}
          <Controller
            name={props.product._id.$oid}
            control={props.control}
            defaultValue={quantity}
            render={({ field }) => (
              <MComponents.TextField
                size="small"
                disabled
                inputProps={{ style: { textAlign: "center" } }}
                variant="standard"
                {...field}
              />
            )}
          />
          <MComponents.Button
            size="small"
            variant="outlined"
            onClick={quantityHandler}
          >
            <Icons.Add />
          </MComponents.Button>
        </MComponents.Stack>
      </MComponents.TableCell>
      <MComponents.TableCell>
        {priceFormatter(productSum)}
      </MComponents.TableCell>
    </MComponents.TableRow>
  );
};

export default RepeatItem;
