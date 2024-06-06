"use client";
import React from "react";
import "./styles.css";

type CountryInfoProps = {
  countryData: any;
};

const CountryInfo: React.FC<CountryInfoProps> = ({ countryData }) => {
  if (!countryData) {
    return null;
  }

  const nativeNames = [];
  for (const key in countryData.name.nativeName) {
    nativeNames.push(countryData.name.nativeName[key]);
  }

  let commonNames = "";
  let officialNames = "";
  nativeNames.map((names) => {
    commonNames += " - " + names.common;
    officialNames += " - " + names.official;
  });

  const borderName = countryData.borders
    ? countryData.borders.join(" - ")
    : "Rien";

  const currencies = countryData.currencies
    ? Object.values(countryData.currencies)
    : [];

  const Name =
    currencies.length > 0
      ? currencies.map((currency: any) => currency.name).join(" - ")
      : "Rien";
  const Symbol =
    currencies.length > 0
      ? currencies.map((currency: any) => currency.symbol).join(" - ")
      : "Rien";

  const gi = countryData.gini
    ? Object.values(countryData.gini).join(" - ")
    : "Non présent";

  const languages = countryData.languages
    ? Object.values(countryData.languages)
    : [];
  const Langues =
    languages.length > 0 ? languages.join(" - ") : "No languages available";

  const demonyms = countryData.demonyms
    ? Object.values(countryData.demonyms)
        .map((names: any) => names.fra)
        .join(" - ")
    : "No demonyms available";

  return (
    <div className="container">
      <div className="section">
        <h1>{countryData.name.common}</h1>
        <img className="flags" src={countryData.flags.png} />
      </div>

      <div className="cont">
        <div className="section">
          <h2>Basic Country information</h2>
          <p>
            Nom commun : {countryData.name.common} {commonNames}
          </p>
          <p>
            Nom officiel : {countryData.name.official} {officialNames}
          </p>
          <p>tld : {countryData.tld}</p>
        </div>

        <div className="section">
          <h2>Geographical Data</h2>
          <p>Latitude : {countryData.latlng[0]}</p>
          <p>Longitude : {countryData.latlng[1]}</p>
          <p>Superficie : {countryData.area} km²</p>
          <p>Pays frontaliers : {borderName}</p>
          <p>
            Région : {countryData.region} / Sous-région :{" "}
            {countryData.subregion}
          </p>
        </div>
      </div>

      <div className="cont">
        <div className="section">
          <h2>Political and Administrative Data</h2>
          <p>Capitale : {countryData.capital}</p>
          <p>Indépendant : {countryData.independent ? "Oui" : "Non"}</p>
          <p>Membre UN : {countryData.uN ? "Oui" : "Non"}</p>
        </div>

        <div className="section">
          <h2>Economic and Demographic Data</h2>
          <p>Nombre d'habitants : {countryData.population}</p>
          <p>
            Devise : nom : {Name} symbol : {Symbol}
          </p>
          <p>Coefficient GINI : {gi}</p>
        </div>
      </div>

      <div className="cont">
        <div className="section">
          <h2>Cultural Data</h2>
          <p>Langages : {Langues}</p>
          <p>Gentilés : {demonyms}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
