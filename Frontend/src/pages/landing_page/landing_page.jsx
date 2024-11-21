import "./Landing_page.css";
import Button from "../../components/Button/button";
import React from "react";
import Navbar from "../../components/navbar/navbar";
function Landing_page() {
  return (
    <>
      <div className="bg-1">
        <div className="header">
          <div className="header_content">
            {/* logo image sorce is in the css file */}
            <div className="logo" />
          

          <Navbar />
          <div className="button"><Button /></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing_page;
