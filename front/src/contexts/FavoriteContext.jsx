import React, { createContext, useEffect, useState } from "react";

const FavoriteContext = createContext({
  handleFavorite: (busId) => {},
  isLiked: (busId) => {},
  favoriteList: [],
});

const FavoriteContextProvider = ({ children }) => {
  const favoriteListLocalStorage =
    JSON.parse(localStorage.getItem("favoriteList")) ?? [];
  const [favoriteList, setFavoriteList] = useState(favoriteListLocalStorage);
  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
  }, [favoriteList]);

  const isLiked = (busId) => {
    if (favoriteList.includes(busId)) {
      return true;
    } else {
      return false;
    }
  };
  const handleFavorite = (busId) => {
    let newArr = [...favoriteList];
    if (newArr.includes(busId)) {
      newArr = newArr.filter((item) => item !== busId);
    } else {
      newArr.push(busId);
    }
    setFavoriteList(newArr);
  };
  const values = { handleFavorite, isLiked, favoriteList };
  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteContext, FavoriteContextProvider };
