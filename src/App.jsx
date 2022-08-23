import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import User from "./components/User/User";
import Profile from "./components/User/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./components/Product/ProductList";
import AuthFilter from "./components/Utilites/AuthFilter";
import { useContext, useEffect, useState } from "react";
import AuthContext from "./store/auth-context";
import Header from "./components/UI/Header";
import StatusBar from "./components/UI/StatusBar";

function App() {
  const authToken = localStorage.getItem("token");
  const authCtx = useContext(AuthContext);
  const checkLogin = async () => {
    await fetch("http://127.0.0.1:3000/users/sign_in", {
      method: "POST",
      headers: {
        Authorization: authToken,
      },
    })
      .then((response) => {
        let data = response.json();
        if (response.ok) {
          data.then((content) => {
            authCtx.onLogin({
              token: response.headers.get("Authorization"),
              userImage: content.image,
              username: content.username,
            });
          });
        } else authCtx.onLogout;
      })
      .catch((e) => e);
  };
  useEffect(() => {
    checkLogin();
  }, [authToken]);
  return (
    <BrowserRouter>
      <Header />
      <StatusBar/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="user" element={<User />} />
        <Route
          path="profile"
          element={
            <AuthFilter>
              <Profile />
            </AuthFilter>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
