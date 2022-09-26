import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import * as Component from "./components/ComponentExporter";
import Order from "./components/User/Order/Order";
import ProductDetails from "./components/Product/ProductDetails";
import { useDispatch } from "react-redux";
import { onLogin, onLogout } from "./store/slices/authSlice";
import Cookies from "js-cookie";
import axios from "axios";
function App() {
  const authToken = Cookies.get("rails-token");
  const dispatch = useDispatch();
  const checkLogin = async () => {
    if (!authToken) return;
    axios
      .get("http://127.0.0.1:3000/auth/validate_token", {
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
          path="user/profile/:id"
          element={
            <Component.AuthFilter>
              <Component.Profile />
            </Component.AuthFilter>
          }
        />
        <Route path="cart" element={<Component.UserCart />} />
        <Route path="user/profile/:id/order" element={<Order />} />
        <Route
          path="user/profile/:id/cart/:id/processcart"
          element={<Component.ProcessCart />}
        />
        <Route path="/category/:slug" element={<Component.Category />} />
        <Route path="category/:slug/:item" element={<ProductDetails />} />
        <Route path="/order-success" element={<Component.OrderSuccess />} />
        <Route
          path="user/profile/:id/edit-address"
          element={<Component.EditAddress />}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Component.Footer />
    </BrowserRouter>
  );
}

export default App;
