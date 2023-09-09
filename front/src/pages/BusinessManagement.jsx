import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import BusItem from "../components/panels/bus/BusItem";

const BusinessManagement = () => {
  const AuthCtx = useContext(AuthContext);
  return (
    <div className="row w_100 justify-content-center  gap-2">
      {AuthCtx.selfUser?.business?.map((busItem, busIndex) => {
        return <BusItem busItem={busItem} key={busIndex} />;
      })}
    </div>
  );
};

export default BusinessManagement;
