import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import user from "./../../assets/user.svg";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    userImage: null,
    username: "",
    userId: "",
  },
  reducers: {
    onLogin: (state, action) => {
      state.username = action.payload.username;
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      Cookies.set("rails-token", action.payload.token, { expires: 7 });
      Cookies.set("rails-login-valid", 1);
      // if (credentails.userImage != null) setUserImage(credentails.userImage);
      state.userImage = user;
    },
    onLogout: (state, action) => {
      Cookies.remove("rails-token");
      Cookies.remove("rails-login-valid");
      state.isLoggedIn = false;
    },
  },
});

export const { onLogin, onLogout } = authSlice.actions;
export default authSlice.reducer;
