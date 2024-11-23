

import React from "react";
import Solutionise from "./solutionise/solutionise";
import About from "./about/about";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* Scrollable sections */}
      <section id="solutionise">
        <Solutionise />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default LandingPage;

