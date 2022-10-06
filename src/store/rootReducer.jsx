import authReducer from "./slices/authSlice";
import statusReducer from "./slices/statusSlice";
import cartReducer from "./slices/cartSlice";
import buyNowreducer from "./slices/buyNowSlice";
import { combineReducers } from "@reduxjs/toolkit";
const appReducer = combineReducers({
  authReducer,
  statusReducer,
  cartReducer,
  buyNowreducer,
});
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

const rootReducer = (state, action) => {
  if (action.type == "RESET") state = initialState;

  return appReducer(state, action);
};
export default rootReducer;
