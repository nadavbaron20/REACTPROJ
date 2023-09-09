import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ navItemCls, navItem }) => {
  return (
    <NavLink to={navItem?.href} className={`btn1 fs_21  ${navItemCls}`}>
      {navItem?.text}
    </NavLink>
  );
};

export default NavItem;
