import { NavLink } from "react-router-dom";
// import "../Nav.css";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  );
}