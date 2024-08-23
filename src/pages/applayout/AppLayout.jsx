import React from "react";
import AppNav from "../../components/appnav/AppNav";
import styles from "./AppLayout.module.css";
import SideBar from "../../components/side-bar/SideBar";
import Map from "../../components/map/Map";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
