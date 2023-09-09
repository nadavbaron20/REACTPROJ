import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes instead of Switch

const NavRoutes = ({ navRoutes }) => {
  return (
    <Routes>
      {navRoutes.map((route, index) => (
        <Route key={index}  path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};

export default NavRoutes;
