import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="
     absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-lg text-yellow flex items-center
     "
    >
      <span>CryptoTrack</span>
    </Link>
  );
};

export default Logo;
