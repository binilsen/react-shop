import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="72915508974-2kc0telk6eck8ako07rvafo8a8m5f0p3.apps.googleusercontent.com">
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
