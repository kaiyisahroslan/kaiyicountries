/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      {countries.map((country) => {
        const { name, common, population, region, capital, flags } = country;

        return (
          <div key={name}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <img src={flags.png} alt={common} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <a
                    href="countryPage"
                    className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                  >
                    {name.common}
                  </a>
                </h2>
                <div>Population: {population}</div>
                <div>Region: {region}</div>
                <div>Capital: {capital}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Countries;
