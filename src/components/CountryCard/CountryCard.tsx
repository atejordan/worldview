"use client";
import React from "react";
import Link from "next/link";
import "./styles.css";

type CardProps = {
  data: any;
};

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="cardflags">
      <Link href={`details/${data.ccn3}`} className="coco">
        <img src={data.flags.png} alt={`${data.name.common} Flag`} />
        <h2 className="backing">{data.name.common}</h2>
      </Link>
    </div>
  );
};

export default Card;
