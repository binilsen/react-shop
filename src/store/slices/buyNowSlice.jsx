import { createSlice } from "@reduxjs/toolkit";

const buyNowSlice = createSlice({
  name: "buy_now",
  initialState: {
    product: null,
    amount: null,
  },
  reducers: {
    setBuynowProduct: (state, action) => {
      state.product = action.payload.product;
      state.amount = action.payload.amount;
    },
  },
});

export const { setBuynowProduct } = buyNowSlice.actions;
export default buyNowSlice.reducer;
