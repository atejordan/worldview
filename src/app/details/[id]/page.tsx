"use client";
import { useEffect, useState } from "react";
import { fetchUserData1 } from "../../../services/Users/UsersService";
import CountryInfo from "../../../components/CountryDetails/CountryDetails";
import Navbar from "../../../components/Navbar/Navbar";

const CountryDe = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState(null);

  const testeur = params.id;
  console.log(testeur);

  useEffect(() => {
    fetchUserData1(testeur).then((response) => {
      setData(response.data[0]);
    });
  }, [testeur]);

  console.log(data);

  return (
    <div>
      <Navbar />
      <br />
      <CountryInfo countryData={data} />
    </div>
  );
};

export default CountryDe;
