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
  cartReducer: { cartId: "", cartTotal: "", carts_products: {} },
};

const store = configureStore({
  preloadedState: initialState,
  reducer: rootReducer,
});

export default store;
