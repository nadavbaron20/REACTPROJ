import { createContext, useEffect, useState } from "react";
import userService from "../services/user.service";

const initialState = {
  login: (token, user) => {},
  logout: () => {},
  isLoggedIn: false,
  token: ``,
  userLocalStorage: JSON.parse(localStorage.getItem("user")),
  selfUser: {},
};

const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selfUser, setSelfUser] = useState({});
  const [token, setToken] = useState(``);
  const userLocalStorage = JSON.parse(localStorage.getItem("user"));
  const isLoggedInLocalStorage = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (isLoggedIn) {
      userService.getSelfUser().then((res) => setSelfUser(res.data));
      localStorage.setItem("isLoggedIn", true);
    } else {
      localStorage.setItem("isLoggedIn", false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedInLocalStorage) {
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
    } else {
      localStorage.setItem("isLoggedIn", false);
      setIsLoggedIn(false);
    }
  }, [isLoggedInLocalStorage]);

  const login = (token, user) => {
    const { password, ...remainUser } = user;
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem("user", JSON.stringify(remainUser));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setToken(undefined);
  };

  const contextValues = {
    login,
    logout,
    isLoggedIn,
    token,
    userLocalStorage,
    selfUser,
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

//the provider is only used in index.tsx <Provider>
export { AuthContext, AuthContextProvider };

//used in all the app:
export default AuthContext;
