import React from "react";
import PageNav from "../components/PageNav";
import { NavLink } from "react-router-dom";
import AppNav from "../components/AppNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>

      <NavLink to="/app">Go to app</NavLink>
    </div>
  );
}

export default Homepage;
