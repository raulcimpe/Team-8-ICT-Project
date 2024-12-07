// import React from "react";
// import "./button.css"; // Import CSS correctly

// const Button = () => {
//   return (
//     <div>
//       <button className="button"><a href="">Book an Appointment</a></button>
//     </div>
//   );
// };

// export default Button;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./button.css"; 

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form"); // Navigate to the Form page
  };

  return (
    <button className="button" onClick={handleClick}>
      Book an Appointment
    </button>
  );
};

export default Button;

