import React from "react";

import Spinner from "../spinner/Spinner";
import styles from "./CountryList.module.css";
import Message from "../message/Message";
import CountryItem from "../country/CountryItem";
import { useCities } from "../../contexts/CitiesContext";

const CountryList = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  //   const countries = cities.reduce((uniqueCountries, city) => {
  //    const isCountryAlreadyIncluded = uniqueCountries.some(
  //      (item) => item.country === city.country
  //    );

  //    if (!isCountryAlreadyIncluded) {
  //      uniqueCountries.push({ country: city.country, emoji: city.emoji });
  //    }

  //    return uniqueCountries;
  //  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;
