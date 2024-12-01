import React from 'react';
import './Expert_Card.css'; // Ensure the CSS file is properly imported.
import S1 from "../../assets/s1.jpg";
import S2 from "../../assets/s2.jpg";
import S3 from "../../assets/s3.jpg";
import S4 from "../../assets/s4.jpg";
import S5 from "../../assets/s5.jpg";
import S6 from "../../assets/s6.jpg";
import S7 from "../../assets/s7.jpg";

const Expert_Card = () => {
  // Data for consultants
  const consultants = [
    { id: 1, image: S1, name: "Ethan Caldwell", title: "Financial Advisor" },
    { id: 2, image: S2, name: "Isabella Fairchild", title: "Tech Consultant" },
    { id: 3, image: S3, name: "Lucas Harrington", title: "Marketing Speacialist" },
    { id: 4, image: S4, name: "Benjamin Whitaker", title: "Design Speacilist" },
    { id: 5, image: S5, name: "Samuel Thornton", title: "IT consutlant" },
    { id: 6, image: S6, name: "Elijah Montgomery", title: "Business Consultant" },
    { id: 7, image: S7, name: "Matthew Blackwell  ", title: "Law Advisor" },
  ];

  return (
    <div className="Expert_Card">
      <div className="background" />
      <div className="background-texture" />
      <section className="carousel">
        <div className="carousel__container">
          {consultants.map((consultant) => (
            <div key={consultant.id} className="carousel-item">
              <img
                className="carousel-item__img"
                src={consultant.image}
                alt={consultant.name}
              />
              <div className="carousel-item__details">
                <div className="controls">
                  <span className="fas fa-play-circle" />
                  <span className="fas fa-plus-circle" />
                </div>
                <h5 className="carousel-item__details--title">
                  {consultant.name}
                </h5>
                <h6 className="carousel-item__details--subtitle">
                  {consultant.title}
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
