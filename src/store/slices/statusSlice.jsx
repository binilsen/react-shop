import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: {
    status: null,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload.message;
    },
  },
});

export const { setStatus } = statusSlice.actions;
export default statusSlice.reducer;
