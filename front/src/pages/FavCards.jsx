import React, { useContext } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { BusContext } from "../contexts/BusContext";
import { useMediaQuery } from "react-responsive";
import { RiDeleteBinLine } from "react-icons/ri";
import { AppContext } from "../contexts/AppContext";

const FavCards = () => {
  const favCtx = useContext(FavoriteContext);
  const busctx = useContext(BusContext);
  const Appctx = useContext(AppContext);

  const favoriteBusinesses = busctx.busList.filter((bus) =>
    favCtx.favoriteList.includes(bus._id)
  );
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="w_100 row gap-1">
      {favoriteBusinesses?.map((bus) => {
        return (
          <div
            key={bus?._id}
            className={`${
              Appctx.darkMode ? "btn1 cursor-off" : "card"
            } p-3 col-sm`}
          >
            <img
              src={bus?.imgUrl}
              alt={bus?.name}
              style={{ maxHeight: `400px`, objectFit: `cover` }}
              className="card-img-top w_100"
            />
            <div className="card-body">
              <h5 className="card-title">{bus?.name}</h5>
              <p className="card-text">
                <strong>Country:</strong> {bus?.address.country}
              </p>
              <p className="card-text">
                <strong>City:</strong> {bus?.address.city}
              </p>
              <p className="card-text">
                <strong>Street:</strong> {bus?.address.street}
              </p>
              <p className="card-text">
                <strong>Website:</strong>{" "}
                <a href={bus.website}>{bus?.website}</a>
              </p>
              <p className="card-text">
                <strong>Phone:</strong> {bus?.phone}
              </p>
              <p className="card-text">
                <strong>Created At:</strong> {bus?.createdAt}
              </p>
            </div>
            <span
              onClick={() => favCtx.handleFavorite(bus?._id)}
              className={`btn1 ${isMobile ? "w_100" : "w_30"} `}
            >
              <RiDeleteBinLine size={40} />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FavCards;
