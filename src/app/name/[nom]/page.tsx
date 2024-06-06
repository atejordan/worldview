"use client";
import { useEffect, useState } from "react";
import { search } from "../../../services/Users/UsersService";
import CountryInfo from "../../../components/CountryDetails/CountryDetails";

const CountrySe = ({ params }: { params: { nom: string } }) => {
  const [data, setData] = useState(null);

  const testeur = params.nom;
  console.log(testeur);

  useEffect(() => {
    search(testeur).then((response) => {
      setData(response.data[0]);
    });
  }, [testeur]);

  console.log(data);

  return (
    <div>
      <CountryInfo countryData={data} />
    </div>
  );
};

export default CountrySe;
