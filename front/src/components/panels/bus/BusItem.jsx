import React, { useContext, useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { TbEditCircle } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";
import { FavoriteContext } from "../../../contexts/FavoriteContext";
import AuthContext from "../../../contexts/AuthContext";
import { BusContext } from "../../../contexts/BusContext";
import YesOrNo from "../../UI/YesOrNo";
import EditBus from "./EditBus";
import { AppContext } from "../../../contexts/AppContext";
const BusItem = ({ busItem }) => {
  const [crudAccess, setCrudAccess] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirmAsk, setShowConfirmAsk] = useState(false);
  const favCtx = useContext(FavoriteContext);
  const busCtx = useContext(BusContext);
  const AuthCtx = useContext(AuthContext);
  const AppCtx = useContext(AppContext);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const handlePhoneCall = () => {
    window.location.href = `tel:${busItem.phone}`;
  };
  useEffect(() => {
    if (AuthCtx.userLocalStorage?._id === busItem?.owner) {
      setCrudAccess(true);
    } else {
      setCrudAccess(false);
    }
  }, [busItem]);
  const deleteBus = () => {
    if (!showConfirmAsk) {
      setShowConfirmAsk(true);
    } else {
      busCtx.handleDelete(busItem?._id);
      setShowConfirmAsk(false);
    }
  };
  const handleEditBtn = () => {
    setShowEdit((s) => !s);
  };
  return (
    <div
      className={`${isMobile ? "w_100" : "w_30"} ${
        AppCtx.darkMode ? "" : "bg-white"
      } btn1 cursor-off   gap-1 justify-content-center text-center`}
    >
      {crudAccess && (
        <div className="row ">
          <AiFillDelete
            onClick={() => deleteBus()}
            className="btn1"
            size={50}
          />
          <TbEditCircle
            onClick={() => handleEditBtn()}
            color="white"
            className="btn1"
            size={50}
          />
        </div>
      )}
      <img
        style={{ maxHeight: `430px` }}
        src={busItem.imgUrl}
        alt={busItem.name}
        className="opacity-black1 radius2 m-1 p-1 col-sm w_100"
      />
      <h2 className="col-sm opacity-black1 radius2 m-1 p-1 ">{busItem.name}</h2>
      <div className="col-sm opacity-black1 radius2 m-1 p-1 ">
        <p className="">Email: {busItem.email}</p>
        <p className="">
          Website:{" "}
          <a className="dec-off fs_color1" href={busItem.website}>
            {busItem.website}
          </a>
        </p>
      </div>
      <div className="col-sm opacity-black1 radius2 m-1 p-1 ">
        <p className="">
          Address: {busItem.address.street}, {busItem.address.city},{" "}
          {busItem.address.country}
        </p>
        <p className="">Phone: {busItem.phone}</p>
      </div>
      <p className="col-sm opacity-black1 radius2 m-1 p-1 ">
        Business Number: {busItem._id}
      </p>

      <span
        onClick={() => favCtx.handleFavorite(busItem?._id)}
        className={`btn1 ${isMobile ? "w_100" : "w_30"} `}
      >
        {" "}
        {favCtx.isLiked(busItem?._id) ? (
          <MdFavorite size={40} />
        ) : (
          <MdFavoriteBorder size={40} />
        )}{" "}
      </span>
      {showConfirmAsk && (
        <YesOrNo
          handleNo={() => setShowConfirmAsk(false)}
          handleYes={() => deleteBus()}
          title={`אישור מחיקה`}
        />
      )}
      {showEdit && <EditBus handleClose={handleEditBtn} busItem={busItem} />}
    </div>
  );
};

export default BusItem;
