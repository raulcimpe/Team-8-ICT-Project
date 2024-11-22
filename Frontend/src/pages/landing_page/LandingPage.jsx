import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <nav>
        <Link to="/solutionise">Solutionise</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default LandingPage;
