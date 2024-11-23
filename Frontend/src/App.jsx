import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LandingPage from "@/pages/landing_page/LandingPage";
// import About from "@/pages/landing_page/about/About";
// import Solutionise from "@/pages/landing_page/solutionise/Solutionise";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}  
        {/* Nested Landing Page Routes */}
        <Route path="/" element={<LandingPage />} />
        {/* Future routes can be added here */}
      </Routes>
    </Router>
  );
};

export default App;
