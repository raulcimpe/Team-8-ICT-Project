import React from 'react';
import './Expert_Card.css'; // Make sure to save the CSS as Expert_Card.css and import it here.

const Expert_Card = () => {
  return (
    <div className="Expert_Card">
      <div className="background" />
      <div className="background-texture" />
      <section className="carousel">

        <div className="carousel__container">
          {/** Repeated card items */}
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div key={index} className="carousel-item">
              <img
                className="carousel-item__img"
                src={`https://images.pexels.com/photos/${item === 7 ? '1964471' : '417344'}/pexels-photo-${item === 7 ? '1964471' : '417344'}.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`}
                alt="Descriptive"
              />
              <div className="carousel-item__details">
                <div className="controls">
                  <span className="fas fa-play-circle" />
                  <span className="fas fa-plus-circle" />
                </div>
                <h5 className="carousel-item__details--title">
                  Consultant Name {item}
                </h5>
                <h6 className="carousel-item__details--subtitle">
                  job title
                </h6>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Expert_Card;
