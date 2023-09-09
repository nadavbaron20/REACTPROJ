import React, { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const AuthCtx = useContext(AuthContext);
  const nav = useNavigate();
  useEffect(() => {
    if (AuthCtx.isLoggedIn) {
      AuthCtx.logout();
      setTimeout(() => {
        nav("/");
      }, 300);
    }
  }, [AuthCtx.isLoggedIn]);
  return <div></div>;
};

export default Logout;
