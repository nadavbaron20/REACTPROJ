import React from "react";
import Navbar from "../panels/nav-bar/Navbar";

const Footer = () => {
  const year = new Date(Date.now()).getFullYear();
  return (
    <div className="row btn1 cursor-off w_100 p-2">
      <Navbar navItemCls={`col-sm`} cls={`w_100 row`} />

      <span>All right reserved @ {year} Bus-Index</span>
    </div>
  );
};

export default Footer;
