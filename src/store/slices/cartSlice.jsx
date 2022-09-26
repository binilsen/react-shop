import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartId: "",
    cartTotal: "",
    carts_products: {},
  },
  reducers: {
    setCart: (state, action) => {
      state.cartId = action.payload.cartId;
      state.cartTotal = action.payload.cartTotal;
      state.carts_products = action.payload.carts_products;
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
