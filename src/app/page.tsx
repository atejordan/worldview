"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { fetchUserData } from "../services/Users/UsersService";
import Card from "../components/CountryCard/CountryCard";
import Navbar from "../components/Navbar/Navbar";
import "./styles.css";

const Sandbox: NextPage = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUserData();
      const sortedData = response.data.sort((a: any, b: any) =>
        a.name.common.localeCompare(b.name.common)
      );
      setData(sortedData);
    };

    fetchData();
  }, []);

  return (
    <div className="backgrounde">
      <Navbar />

      <div className="card-container">
        {data.map((item) => (
          <div key={item.id}>
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sandbox;
