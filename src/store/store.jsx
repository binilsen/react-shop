import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
const initialState = {
  authReducer: {
    isLoggedIn: false,
    userImage: null,
    username: "",
    userId: "",
  },
  statusReducer: { status: null },
  cartReducer: { cartId: null, cartTotal: null, carts_products: null },
  buyNowreducer: { product: null },
};

const store = configureStore({
  preloadedState: initialState,
  reducer: rootReducer,
});

export default store;
