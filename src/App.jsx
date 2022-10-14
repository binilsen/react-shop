import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import * as Component from "./components/ComponentExporter";
import Order from "./components/User/Order/Order";
import ProductDetails from "./components/Product/ProductDetails";
import { useDispatch } from "react-redux";
import { onLogin, onLogout } from "./store/slices/authSlice";
import { setCart } from "./store/slices/cartSlice";
import Cookies from "js-cookie";
import axios from "axios";
function App() {
  const authToken = Cookies.get("rails-token");
  const dispatch = useDispatch();
  const checkLogin = async () => {
    if (!authToken) return;
    axios
      .get("http://127.0.0.1:3000/api/v1/auth/validate_token", {
        headers: {
          Authorization: authToken,
        },
      })
      .then((response) => {
        dispatch(
          onLogin({
            token: response.headers.authorization,
            userImage: response.data.image,
            username: response.data.data.email,
            userId: response.data.data.id,
          })
        );
        dispatch(
          setCart({
            cartId: response.data.cart._id.$oid,
            cartTotal: response.data.cart.total,
            carts_products: response.data.carts_products,
          })
        );
      })
      .catch((e) => dispatch(onLogout()));
  };
  useEffect(() => {
    checkLogin();
  }, [authToken]);
  return (
    <BrowserRouter>
      <Component.Header />
      <Component.StatusBar />
      <Component.CategoryBar />
      <Routes>
        <Route path="/" element={<Component.Home />} />
        <Route path="user" element={<Component.User />} />
        <Route
          path="/user/profile/:id"
          element={
            <Component.AuthFilter>
              <Component.Profile />
            </Component.AuthFilter>
          }
        />
        <Route
          path="/cart/:cart_id/processcart"
          element={
            <Component.AuthFilter>
              <Component.ProcessCart />
            </Component.AuthFilter>
          }
        />
        <Route
          path="/cart"
          element={
            <Component.AuthFilter>
              <Component.UserCart />
            </Component.AuthFilter>
          }
        />
        <Route
          path="user/profile/:id/orders/:order_id"
          element={
            <Component.AuthFilter>
              <Order />
            </Component.AuthFilter>
          }
        />
        <Route path="/category/:slug" element={<Component.Category />} />
        <Route path="category/:slug/:item" element={<ProductDetails />} />
        <Route
          path="/order-success/:id"
          element={
            <Component.AuthFilter>
              <Component.OrderSuccess />
            </Component.AuthFilter>
          }
        />
        <Route
          path="/user/profile/:id/add-address"
          element={
            <Component.AuthFilter>
              <Component.AddAddress />
            </Component.AuthFilter>
          }
        />
        <Route
          path="user/profile/:id/edit-address/:address_id"
          element={
            <Component.AuthFilter>
              <Component.EditAddress />
            </Component.AuthFilter>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Component.Footer />
    </BrowserRouter>
  );
}

export default App;
