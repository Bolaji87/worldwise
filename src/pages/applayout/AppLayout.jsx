import React from "react";
import AppNav from "../../components/appnav/AppNav";
import styles from "./AppLayout.module.css";
import SideBar from "../../components/side-bar/SideBar";
import Map from "../../components/map/Map";
import User from "../../components/user/User";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
