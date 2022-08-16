import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ProductList from "./components/Product/ProductList";
import TokenForm from "./components/TokenForm/TokenForm";
import { useState } from "react";

function App() {
  const [isTokenEntered, setTokenEntered] = useState(false);
  const [token, setToken] = useState(null);
  const tokenHandler = (token) => {
    setTokenEntered(true);
    setToken(token);
  };
  return (
    <>
      <TokenForm onTokenSubmit={tokenHandler} />
      {isTokenEntered && (
        <ProductList token={token} tokenReset={() => setTokenEntered(false)} />
      )}
    </>
  );
}

export default App;
