import React from "react";
import UserNavItem from "./UserNavItem";

const UserNavbar = ({ userNavList }) => {
  return (
    <div className="row gap-1">
      {userNavList?.map((navItem, navIndex) => {
        return <UserNavItem key={navIndex} navItem={navItem} />;
      })}
    </div>
  );
};

export default UserNavbar;
