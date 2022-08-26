import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import * as Component from "./components/ComponentExporter";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useCallback, useContext, useEffect } from "react";
import AuthContext from "./store/auth-context";
import Cookies from "js-cookie";
import { CartContextProvider } from "./store/cart-context";

function App() {
  const authToken = Cookies.get("authToken");
  const authCtx = useContext(AuthContext);
  const checkLogin = useCallback(async () => {
    if (!authToken) return;
    const response = await fetch("http://127.0.0.1:3000/api/users/sign_in", {
      method: "POST",
      headers: {
        Authorization: authToken,
      },
    });
    let data = response.json();
    if (response.ok) {
      data.then((content) => {
        authCtx.onLogin({
          token: response.headers.get("Authorization"),
          userImage: content.image,
          username: content.email,
          id: content.id,
          cart: content.cart,
        });
      });
    } else authCtx.onLogout();
  }, []);
  useEffect(() => {
    checkLogin();
  }, [checkLogin]);
  return (
    <BrowserRouter>
      <Component.Header />
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<Component.ProductList />} />
          <Route path="cart" element={<Component.Cart />} />
          <Route path="user/:page" element={<Component.User />} />
          <Route
            path="/users/:userid"
            element={
              <Component.AuthFilter>
                <Component.Profile />
              </Component.AuthFilter>
            }
          />
          <Route
            path="/users/:id/orders"
            element={
              <Component.AuthFilter>
                <Component.UserOrders />
              </Component.AuthFilter>
            }
          />
          <Route
            path="/users/:id/orders/:orderId"
            element={
              <Component.AuthFilter>
                <Component.Order />
              </Component.AuthFilter>
            }
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
