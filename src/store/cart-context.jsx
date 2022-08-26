import { createContext, useState } from "react";

const CartContext = createContext({
  cart: null,
  cartUpdate: () => {},
});
export const CartContextProvider = (props) => {
  const [cart, setCart] = useState(null);
  const cartHandler = (data) => {
    setCart(data);
  };
  return (
    <CartContext.Provider value={{ cart: cart, cartUpdate: cartHandler }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
