import React from "react";
import StyleNavbarPublic from "../navigation/StyleNavbarPublic";
import StyleNavbarPrivate from "../navigation/StyleNavbarPrivate";
import { Outlet } from "react-router-dom";

const NavigationBar = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? <StyleNavbarPrivate /> : <StyleNavbarPublic />}
      <Outlet />
    </>
  );
};

export default NavigationBar;
