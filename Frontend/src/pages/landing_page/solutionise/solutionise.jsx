import React from "react";
// import Card from "../../../components/Card/Card";
import Header from "../../../components/Header/Header";
import "./solutionise.css";
function Solutionise() {
  return (
    <>
      <div className="page">
        <Header />
        <div className="container">
          <h1>
            Your Partner in Local
            <br /> <span class="fancy">Growth and Innovation</span>
          </h1>
          <p>
            At LSBU Solutionsie, we are committed to driving growth and
            fostering <br />
            innovation for businesses in our community. With a deep
            understanding <br />
            of industry trends and a passion for practical solutions, our team
            provides <br />
            tailored strategies that empower local companies to reach new
            heights.
          </p>
          <div className="cards_container">
            {/* Card 1 */}
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <div className="van_logo"></div>
                  <h2>On Time Delievry</h2>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde ab repudiandae, explicabo voluptate et hic cum ratione
                    a. Officia
                  </p>
                  <a href="#" type="button">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <div className="calendar"></div>
                  <h2>Weekly Services</h2>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde ab repudiandae, explicabo voluptate et hic cum ratione
                    a. Officia
                  </p>
                  <a href="#" type="button">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <div className="staff"></div>
                  <h2>Professional Staff</h2>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde ab repudiandae, explicabo voluptate et hic cum ratione
                    a. Officia
                  </p>
                  <a href="#" type="button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Solutionise;
