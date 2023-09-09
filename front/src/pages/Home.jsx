import React, { useContext } from "react";
import { BusContext } from "../contexts/BusContext";
import BusItem from "../components/panels/bus/BusItem";
import { FaPlus } from "react-icons/fa";
import { AppContext } from "../contexts/AppContext";
const Home = () => {
  const BusCtx = useContext(BusContext);
  const AppCtX = useContext(AppContext);

  return (
    <div
      className={`${
        AppCtX.darkMode ? "opacity-black9" : "opacity-white9"
      }  w_100`}
    >
      <div className="row w_100  justify-content-center gap-3 m-2  cursor-off">
        {BusCtx.busList.map((busItem, busIndex) => {
          return <BusItem busItem={busItem} key={busIndex} />;
        })}
      </div>
    </div>
  );
};

export default Home;
