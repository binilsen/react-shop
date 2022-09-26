import authReducer from "./slices/authSlice";
import statusReducer from "./slices/statusSlice";
import cartReducer from "./slices/cartSlice";
import { combineReducers } from "@reduxjs/toolkit";
const appReducer = combineReducers({
  authReducer,
  statusReducer,
  cartReducer,
});
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

const rootReducer = (state, action) => {
  if (action.type == "RESET") state = initialState;

  return appReducer(state, action);
};
export default rootReducer;
