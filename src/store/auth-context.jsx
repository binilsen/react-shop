import { useState, createContext, useEffect } from "react";
import user from "./../assets/user.svg";
import Cookie from "js-cookie";
const AuthContext = createContext({
  isLoggedIn: false,
  onLogin: ({ credentails }) => {},
  onLogout: () => {},
  userImage: null,
  username: "",
  status: null,
  userId: null,
  setStatus: (message) => {},
  cart: null,
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState(user);
  const [username, setUsername] = useState("testuser");
  const [status, setStatus] = useState(null);
  const [userId, setUserId] = useState(null);
  const [cart, setCart] = useState(null);
  const loginHandler = (credentails) => {
    setUsername(credentails.username);
    setLoggedIn(true);
    setUserId(credentails.id);
    setCart(credentails.cart);
    Cookie.set("authToken", credentails.token, { expires: 1 / 24 });
    if (credentails.userImage != null) setUserImage(credentails.userImage);
    else setUserImage(user);
  };

  const statusSetter = (message) => {
    setStatus(message);
    setTimeout(() => {
      setStatus(null);
    }, 2000);
  };
  const logoutHandler = () => {
    Cookie.remove("authToken");
    setLoggedIn(false);
    setUsername(null);
    setUserId(null);
    setCart(null);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        userImage: userImage,
        username: username,
        status: status,
        setStatus: statusSetter,
        userId: userId,
        cart: cart,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
