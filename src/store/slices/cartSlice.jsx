import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartId: null,
    cartTotal: null,
    carts_products: null,
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
