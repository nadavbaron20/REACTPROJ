import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { AppContext } from "../../contexts/AppContext";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { userNavList } from "../../utils/user-nav-list";
import UserNavbar from "../panels/user-nav-bar/UserNavbar";
import { FaPlus } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import Navbar from "../panels/nav-bar/Navbar";

const Header = () => {
  const [showUserNav, setShowUserNav] = useState(false);
  const AppCtx = useContext(AppContext);
  const nav = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div
      className={`
      ${AppCtx.darkMode ? "opacity-black9" : "opacity-white9"}
      row w_100 align-items-center justify-content-center text-center`}
    >
      <img
        onClick={() => nav("/")}
        className="col-sm cursor btn"
        src={logo}
        alt="Logo"
      />
      <Navbar cls={`col-sm`} />
      <div
        onClick={() => AppCtx.setDarkMode((s) => !s)}
        className="cursor col-sm"
      >
        {AppCtx.darkMode ? (
          <MdDarkMode color={AppCtx.darkMode ? "white" : "black"} size={45} />
        ) : (
          <MdOutlineDarkMode
            color={AppCtx.darkMode ? "white" : "black"}
            size={45}
          />
        )}
      </div>
      <div className="col-sm d-flex flex-column ">
        <BsPersonCircle
          onClick={() => setShowUserNav((s) => !s)}
          className="cursor"
          size={40}
          color={AppCtx.darkMode ? "white" : "black"}
        />
      </div>
      <span onClick={() => nav("/bus/new")} className={`col-sm m-2 btn1  `}>
        <FaPlus size={40} />
      </span>
      {showUserNav && (
        <div
          dir="rtl"
          style={{ marginTop: `-30px` }}
          className="d-flex col-sm btn1 cursor-off  align-items-center justify-content-center"
        >
          <UserNavbar userNavList={userNavList} />
        </div>
      )}
    </div>
  );
};

export default Header;
