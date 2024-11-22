import "./Landing_page.css";
import Button from "../../components/Button/button";
import Card from "../../components/Card/Card";
import React from "react";
import Navbar from "../../components/navbar/navbar";
function Landing_page() {
  return (
    <><div className="page">
      <div className="bg-1">
        <div className="header">
          <div className="header_content">
            {/* logo image sorce is in the css file */}
            <div className="logo" />

            <Navbar />
            <div className="button">
              <Button />
            </div>
          </div>
        </div>
        <div className="container">

         <h1>Your Partner in Local<br /> <span class="fancy">Growth and Innovation</span></h1>
          <p>
          At LSBU Solutionsie, we are committed to driving growth and fostering <br />
           innovation for businesses in our community. With a deep understanding <br />
           of industry trends and a passion for practical solutions, our team provides <br />
           tailored strategies that empower local companies to reach new heights.
          </p>
        </div>
        <div className="cards_container">
          <Card />
        </div>
      </div>
      </div>
    </>
  );
}

export default Landing_page;
