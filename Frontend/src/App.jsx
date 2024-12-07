// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import LandingPage from "@/pages/landing_page/LandingPage";
// // import About from "@/pages/landing_page/about/About";
// // import Solutionise from "@/pages/landing_page/solutionise/Solutionise";


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Landing Page */}  
//         {/* Nested Landing Page Routes */}
//         <Route path="/" element={<LandingPage />} />
//         {/* Future routes can be added here */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/landing_page/LandingPage";
import Form from "@/pages/form/Form"; // Import the Form page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        {/* Form Page */}
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
