import React from "react";
import { Link } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";
import { BsJustify } from "react-icons/bs";

function Nav() {
  return (
    <div className="container d-flex justify-content-between">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <Link to="/cardlisting" className="ms-3">
            Your
          </Link>
        </li>
        <li class="nav-item active" role="presentation">
          <Link to="/card" className="ms-3">
            All
          </Link>
        </li>
        <li class="nav-item" role="presentation">
          <Link to="/card" className="ms-3">
            Blocked
          </Link>
        </li>
      </ul>
      <div class="mx-2">
        <BsFillGridFill class="mx-2" />

        <BsJustify />
      </div>
    </div>
  );
}

export default Nav;
