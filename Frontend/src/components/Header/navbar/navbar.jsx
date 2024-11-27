
import React from "react";
import { Link } from "react-scroll";

import "./navbar.css";

function Navbar() {
  return (
    <div className="nav">
      {/* Use Link from react-scroll */}
      <Link to="solutionise" smooth={true} duration={500}>Solutionise</Link>
      <Link to="about" smooth={true} duration={500}>About Us</Link>
      <Link to="services" smooth={true} duration={500}>Services</Link>
      <Link to="expert" smooth={true} duration={500}>Our Experts</Link>
      <Link to="reviews" smooth={true} duration={500}>Reviews</Link>
      <Link to="blog" smooth={true} duration={500}>Blog</Link>
      <Link to="faq" smooth={true} duration={500}>FAQ</Link>
    </div>
  );
}

export default Navbar;

