import React from "react";
import { BiVideo, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <h1>Virtual Cards</h1>
          <Link to="/card" className="ms-2">
            <BiVideo />
            Learn more
          </Link>
        </div>
        <div className="px-2 py-1 shadow-sm rounded">
          <span role="button">
            <BiPlus /> virtual card
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
