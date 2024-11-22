import React from "react";
import Card from "../../../components/Card/Card";
import Header from "../../../components/Header/Header";
import "./solutionise.css";
function Solutionise() {
  return (
    <><div className="page">
      <div className="bg-1">
        <Header/>
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

export default Solutionise;
