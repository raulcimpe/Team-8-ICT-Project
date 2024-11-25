import React from "react";
import "./Services_Card.css"; // Import the CSS file

const Services_Card = () => {
  return (
    <div className="wrapper">
      <h1>Our Services</h1>
      <div className="cols">
        {/* Card 1 */}
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="services_container">
            <div
              className="front"
              style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}
            >
              <div className="inner">
                <p>Diligord</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="services_container">
            <div
              className="front"
              style={{ backgroundImage: "url(https://unsplash.it/511/511/)" }}
            >
              <div className="inner">
                <p>Rocogged</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="services_container">
            <div
              className="front"
              style={{ backgroundImage: "url(https://unsplash.it/502/502/)" }}
            >
              <div className="inner">
                <p>Strizzes</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="services_container">
            <div
              className="front"
              style={{ backgroundImage: "url(https://unsplash.it/503/503/)" }}
            >
              <div className="inner">
                <p>Clossyo</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="services_container">
            <div
              className="front"
              style={{ backgroundImage: "url(https://unsplash.it/504/504/)" }}
            >
              <div className="inner">
                <p>Morquio</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="services_container">
            <div
              className="front"
              style={{ backgroundImage: "url(https://unsplash.it/505/505/)" }}
            >
              <div className="inner">
                <p>Neblune</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services_Card;

