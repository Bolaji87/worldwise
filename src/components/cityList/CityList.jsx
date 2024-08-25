import React from "react";

import styles from "./CityList.module.css";
import Spinner from "../spinner/Spinner";
import CityItem from "../city-item/CityItem";
import Message from "../message/Message";

const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
