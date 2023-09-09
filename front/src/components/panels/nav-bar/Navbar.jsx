import React from "react";
import { navList } from "../../../utils/nav-list";
import NavItem from "./NavItem";

const Navbar = ({ cls, navItemCls }) => {
  return (
    <div className={cls}>
      {navList?.map((navItem, navIndex) => {
        return (
          <NavItem navItemCls={navItemCls} navItem={navItem} key={navIndex} />
        );
      })}
    </div>
  );
};

export default Navbar;
