import React from "react";
import { Outlet } from "react-router-dom";

import Logo from "../logo/Logo";
import AppNav from "../appnav/AppNav";
import styles from "./SideBar.module.css";
import Footer from "../footer/Footer";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
};

export default SideBar;
