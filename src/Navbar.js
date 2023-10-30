import React from "react";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>
          W.A.K<span> Accounting</span>
        </h1>
      </div>
      <div className="header">
        <div className="dropdown" data-dropdown> {/* Add data-dropdown attribute here */}
          <button className="link" data-dropdown-button>
            Home
          </button>
          <div className="dropdown-menu information-grid">
            <div>
              <div className="dropdown-heading">Free Tutorials</div>
              <div className="dropdown-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        <button className="link" data-dropdown-button>
          About
        </button>
        <button className="link" data-dropdown-button>
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;