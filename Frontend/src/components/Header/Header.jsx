import React from "react";
import Navbar from "./navbar/navbar";
import Button from "../Button/button";
import './Header.css';
const Header = () => {
  return (
    <div className="header">
      <div className="header_content">
        {/* Logo */}
        <div className="logo" />

        {/* Navigation Menu */}
        <Navbar />

        {/* Dynamic Button */}
        <div className="button">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Header;
