import React from "react";
import "./reviews.css";
import T1 from "../../../assets/T1.jpg";
import T2 from "../../../assets/T2.jpg";
import T3 from "../../../assets/T3.jpg";
import T4 from "../../../assets/T4.jpg";
import T5 from "../../../assets/T5.jpg";
import T6 from "../../../assets/T6.jpg";

const Reviews = () => {
  const reviewData = [
    {
      id: 1,
      photo: T1,
      name: "John Doe",
      reviews: "This is an amazing service! Highly recommend it.",
    },
    {
      id: 2,
      photo: T2,
      name: "Jane Smith",
      reviews: "Had a wonderful experience, will definitely return.",
    },
    {
      id: 3,
      photo: T3,
      name: "Alice Johnson",
      reviews: "Top-notch quality and excellent support!",
    },
    {
      id: 4,
      photo: T4,
      name: "Robert Brown",
      reviews: "Impressive! Exceeded my expectations.",
    },
    {
      id: 5,
      photo: T5,
      name: "Emma Wilson",
      reviews: "A delightful experience. Five stars!",
    },
    {
      id: 6,
      photo: T6,
      name: "Oliver Davis",
      reviews: "Professional and reliable service.",
    },
  ];

  return (
    <div className="reviews_container">
      <div className="reviews_grid">
        {reviewData.map((review) => (
          <div className="review_card" key={review.id}>
            <div className="profile_photo">
              <img src={review.photo} alt={`${review.name}'s profile`} />
            </div>
            <div className="review_content">
              <h3>{review.name}</h3>
              <p>{review.reviews}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
