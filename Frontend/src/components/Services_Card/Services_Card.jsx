import React from "react";
import "./Services_Card.css"; // Import the CSS file
import Service_IT from "../../assets/services_IT.jpg";
import Service_Law from "../../assets/service_LAW.jpg"
import Service_Business from "../../assets/service_business.jpg"
import Service_Marketing from "../../assets/services_marketing.jpg"
import Service_Signposting from "../../assets/services_signposting.jpg"
import Service_Others from "../../assets/services_others.jpg"


const Services_Card = () => {
  return (
    <div className="wrapper">
      <h1>Our Services</h1>
      <div className="cols">
        {/* Card 1 */}
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="services_container">
          <div className="front">
              <img src={Service_IT} alt="About Us" className="front" />
              <div className="inner">
                <p>IT</p>
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
            <div className="front">
              <img src={Service_Law} alt="About Us" className="front" />
              <div className="inner">
                <p>LAW</p>
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
            <div className="front">
              <img src={Service_Business} alt="About Us" className="front" />
              <div className="inner">
                <p>BUSINESS</p>
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
            <div className="front">
              <img src={Service_Marketing} alt="About Us" className="front" />
              <div className="inner">
                <p>MARKETING</p>
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
            <div className="front">
              <img src={Service_Signposting} alt="About Us" className="front" />
              <div className="inner">
                <p>SIGNPOSTING</p>
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
            <div className="front">
              <img src={Service_Others} alt="About Us" className="front" />
              <div className="inner">
                <p>OTHERS</p>
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

// import React from "react";
// import "./Services_Card.css"; // Import the CSS file

// const Services_Card = () => {
//   return (
//     <div className="wrapper">
//       <h1>Our Services</h1>
//       <div className="cols">
//         {/* Card 1 */}
//         <div className="col" ontouchstart="this.classList.toggle('hover');">
//           <div className="services_container">
//             <div
//               className="front"
//               style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}
//             >
//               <div className="inner">
//                 <img src="" alt="" />
//                 <span>Lorem ipsum</span>
//               </div>
//             </div>
//             <div className="back">
//               <div className="inner">
//                 <p>
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Alias cum repellat velit quae suscipit c.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 2 */}
//         <div className="col" ontouchstart="this.classList.toggle('hover');">
//           <div className="services_container">
//             <div
//               className="front"
//               style={{ backgroundImage: "url(https://unsplash.it/511/511/)" }}
//             >
//               <div className="inner">
//                 <p>Rocogged</p>
//                 <span>Lorem ipsum</span>
//               </div>
//             </div>
//             <div className="back">
//               <div className="inner">
//                 <p>
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Alias cum repellat velit quae suscipit c.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 3 */}
//         <div className="col" ontouchstart="this.classList.toggle('hover');">
//           <div className="services_container">
//             <div
//               className="front"
//               style={{ backgroundImage: "url(https://unsplash.it/502/502/)" }}
//             >
//               <div className="inner">
//                 <p>Strizzes</p>
//                 <span>Lorem ipsum</span>
//               </div>
//             </div>
//             <div className="back">
//               <div className="inner">
//                 <p>
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Alias cum repellat velit quae suscipit c.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 4 */}
//         <div className="col" ontouchstart="this.classList.toggle('hover');">
//           <div className="services_container">
//             <div
//               className="front"
//               style={{ backgroundImage: "url(https://unsplash.it/503/503/)" }}
//             >
//               <div className="inner">
//                 <p>Clossyo</p>
//                 <span>Lorem ipsum</span>
//               </div>
//             </div>
//             <div className="back">
//               <div className="inner">
//                 <p>
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Alias cum repellat velit quae suscipit c.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 5 */}
//         <div className="col" ontouchstart="this.classList.toggle('hover');">
//           <div className="services_container">
//             <div
//               className="front"
//               style={{ backgroundImage: "url(https://unsplash.it/504/504/)" }}
//             >
//               <div className="inner">
//                 <p>Morquio</p>
//                 <span>Lorem ipsum</span>
//               </div>
//             </div>
//             <div className="back">
//               <div className="inner">
//                 <p>
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Alias cum repellat velit quae suscipit c.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 6 */}
//         <div className="col" ontouchstart="this.classList.toggle('hover');">
//           <div className="services_container">
//             <div
//               className="front"
//               style={{ backgroundImage: "url(https://unsplash.it/505/505/)" }}
//             >
//               <div className="inner">
//                 <p>Neblune</p>
//                 <span>Lorem ipsum</span>
//               </div>
//             </div>
//             <div className="back">
//               <div className="inner">
//                 <p>
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Alias cum repellat velit quae suscipit c.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services_Card;
