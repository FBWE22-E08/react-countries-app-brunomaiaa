import React from "react";
import { NavLink } from "react-router-dom";
import ByName from "./views/ByName";

export default function Header() {
  // add NavLinks to allow the user to navigate to the 3 pages of the app 
  return (
    <div className="header">
      <NavLink to="/">All Countries</NavLink>
      <NavLink to="/by-name">By name</NavLink>
      <NavLink to="/by-region">By Region</NavLink>
    </div>
  );
}
