import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";

const UserNavItem = ({ navItem }) => {
  const AuthCtx = useContext(AuthContext);
  if (navItem?.loggedOnly && !AuthCtx.isLoggedIn) return;
  if (navItem?.unLoggedOnly && AuthCtx.isLoggedIn) return;
  return (
    <NavLink className="btn1 col-sm dec-off text-white" to={navItem?.href}>
      {navItem?.text}
    </NavLink>
  );
};

export default UserNavItem;
