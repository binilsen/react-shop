import { useState, createContext } from "react";
import user from "./../assets/user.svg";
const AuthContext = createContext({
  isLoggedIn: false,
  onLogin: ({ credentails }) => {},
  onLogout: () => {},
  userImage: null,
  username: "",
  status: null,
  setStatus: ({message}) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState(user);
  const [username, setUsername] = useState("testuser");
  const [status, setStatus] = useState(null);
  const loginHandler = (credentails) => {
    setUsername(credentails.username);
    setLoggedIn(true);
    localStorage.setItem("token", credentails.token);
    localStorage.setItem("login_valid", 1);
    if (credentails.userImage != null) setUserImage(credentails.userImage);
    else setUserImage(user);
  };

  const statusSetter = (message) => {
    setStatus(message);
    setTimeout(() => {
      setStatus(null);
    }, 1000);
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("login_valid");
    setLoggedIn(false);
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
