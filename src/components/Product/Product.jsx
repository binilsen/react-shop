import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import priceFormater from "./../Utilites/priceFormater";
import CartContext from "./../../store/cart-context";
const Product = (props) => {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  var cartItemQuantity = null;
  if (cartCtx.cart)
    cartCtx.cart.carts_products.filter((item) => {
      if (props.product.id == item.product_id)
        cartItemQuantity = item.product_quantity;
    });
  const [quantity, setQuantity] = useState(cartItemQuantity);
  const productId = props.product.id;
  var productUnit = props.product.unit.symbol;
  const addProductHandler = async () => {
    await fetch(`http://127.0.0.1:3000/products/${productId}/add`, {
      method: "POST",
      headers: {
        authorization: Cookies.get("authToken"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuantity(data.quantity);
        cartCtx.cartUpdate(data.cart);
      })
      .catch((e) => authCtx.setStatus(e));
  };
  const removeProductHandler = async () => {
    await fetch(`http://127.0.0.1:3000/products/${productId}/remove`, {
      method: "POST",
      headers: {
        authorization: Cookies.get("authToken"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.remove) return setQuantity(null);
        setQuantity(data.quantity);
        cartCtx.cartUpdate(data.cart);
      })
      .catch((e) => authCtx.setStatus(e));
  };
  return (
    <>
      <div className="col-sm-6  p-1 col-lg-4 my-1">
        <div className="card bg-light text-dark shadow  h-100">
          <div className="card-body">
            <div className="card-title">
              <div className="row">
                <div className="">
                  <Link to="/" className="lead text-decoration-none fs-5">
                    {props.product.product_name}
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-text">
              <div className="row justify-content-between">
                <p className="col-6 small">Weight</p>
                <p className="col-6 text-end text-uppercase lead">
                  {props.product.product_weight}
                  <span className="mx-1">{productUnit}</span>
                </p>
              </div>
              <div className="row">
                <p className="col-6 small">Price</p>
                <p className=" lead col-6 text-end text-danger">
                  {priceFormater(props.product.product_price)}
                </p>
              </div>

              {authCtx.isLoggedIn && (
                <div className="row justify-content-center align-items-center p-4">
                  {quantity && (
                    <div className="col-sm-2 p-1">
                      <button
                        onClick={removeProductHandler}
                        className="btn p-2 text-center mx-2 btn-outline-danger d-inline-block w-100"
                      >
                        -
                      </button>
                    </div>
                  )}
                  {quantity && (
                    <div className="col-sm-8 text-center">
                      <Link to="cart" className="btn btn-secondary">
                        On Cart{" "}
                        <span className="badge bg-danger">{quantity}</span>
                      </Link>
                    </div>
                  )}

                  <div className="col-sm-2 p-1">
                    <button
                      className="btn btn-outline-primary p-2 text-center d-inline-block w-100"
                      onClick={addProductHandler}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`row p-2 my-2 ${styles.product} align-items-center`}>
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
      </div> */}
    </>
  );
};

export default Product;
