import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? "active" : ""}`}>
      <button className="link" data-dropdown-button onClick={toggleDropdown}>
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;