import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import "./styles.css";

const NavbarCard = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <title>World View</title>
      <nav className="menu" role="navigation">
        <div className="inner">
          <div className="m-left">
            <h1 className="logo">World View</h1>
          </div>
          <div className="m-right">
            <Link href="../../">
              {}
              <div className="m-link">Home</div>
            </Link>
            <Link href="/about">
              {}
              <div className="m-link">About</div>
            </Link>
          </div>
          <input onChange={(e) => setName(e.target.value)} required></input>
          <Link href={`/name/${name}`}>
            <button>Click to submit</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarCard;
