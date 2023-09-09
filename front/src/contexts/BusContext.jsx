import React, { createContext, useEffect, useState } from "react";
import busService from "../services/bus.service";

const BusContext = createContext({ busList: [], handleDelete: (busId) => {} });

const BusContextProvider = ({ children }) => {
  const [busList, setBusList] = useState([]);
  useEffect(() => {
    busService.getBusList().then((res) => setBusList(res.data));
  }, []);

  const handleDelete = (busId) => {
    let newArr = [...busList];
    newArr = newArr.filter((item) => item._id !== busId);
    setBusList(newArr);
    busService.deleteBus(busId);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  const values = { busList, handleDelete };
  return <BusContext.Provider value={values}>{children}</BusContext.Provider>;
};

export { BusContext, BusContextProvider };
