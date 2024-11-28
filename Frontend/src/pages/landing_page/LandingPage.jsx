

import React from "react";
import Solutionise from "./solutionise/solutionise";
import Expert from "./expert/expert";
import About from "./about/about";
import Services from "./services_page/Services";
import "./LandingPage.css";
import Reviews from "./reviews/reviews";
import Blog from "./blog/blog";

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
      <section id="services">
        <Services />
      </section>
      <section id="expert">
        <Expert />
      </section>
      <section id="reviews">
        <Reviews/>
      </section>
      <section id="blog">
        <Blog/>
      </section>
    </div>
  );
};

export default LandingPage;

