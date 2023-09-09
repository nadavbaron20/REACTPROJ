import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext({
  darkMode: false,
  setDarkMode: (s) => {},
});

const AppContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);
  const values = { darkMode, setDarkMode };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
