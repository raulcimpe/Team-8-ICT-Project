import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav">
      {/* Use Link instead of a regular anchor tag */}
      <Link to="/">Solutionise</Link>  
      <Link to="/about">About us</Link>  
      <Link to="#services">Services</Link>
      <Link to="#our-experts">Our experts</Link>
      <Link to="#reviews">Reviews</Link>
      <Link to="#blog">Blog</Link>
      <Link to="#faq">Faq</Link>
    </div>
  );
}

export default Navbar;
