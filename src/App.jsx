import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "./store/auth-context";
import * as Component from "./components/ComponentExporter";

function App() {
  const authToken = localStorage.getItem("token");
  const authCtx = useContext(AuthContext);
  const checkLogin = async () => {
    if (!authToken) return;

    const response = await fetch("http://127.0.0.1:3000/users/sign_in", {
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
          username: content.username,
        });
      });
    } else {
      authCtx.onLogout();
    }
  };
  useEffect(() => {
    checkLogin();
  }, [authToken]);
  return (
    <BrowserRouter>
      <Component.Header />
      <Component.StatusBar />
      <Routes>
        <Route path="/" element={<Component.ProductList />} />
        <Route path="user" element={<Component.User />} />
        <Route
          path="profile"
          element={
            <Component.AuthFilter>
              <Component.Profile />
            </Component.AuthFilter>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
