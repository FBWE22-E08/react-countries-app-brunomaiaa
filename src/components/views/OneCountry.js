import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function OneCountry() {
  let { code } = useParams();
  const [countryCode, setCountryCode] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
      .then((response) => response.json())
      .then((data) => setCountryCode(data));
  }, [code]);

  return (
    <div>
      <h1>{countryCode.name}</h1>
      <h3>{countryCode.capital} </h3>
      <img src={countryCode.flag} alt={countryCode.name} width="200px" />
      <p>{countryCode.region}</p>
      <p>{countryCode.subregion}</p>
      <p>{countryCode.population}</p>
      <p>{countryCode.area}</p>
      <p>{countryCode.region}</p>
      <p>Languages:</p>
      {countryCode.languages &&
        countryCode.languages.map((i) => <p>{i.name}</p>)}
    </div>
  );
}
