import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#0d6efd", padding: "10px" }}>
      <ul style={{ display: "flex", justifyContent: "space-around", listStyle: "none", margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
        <li><Link to="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link></li>
        <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
