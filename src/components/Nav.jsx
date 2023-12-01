import { NavLink } from "react-router-dom";
import Logo from "./visuals/Logo.jsx";
// import "../Nav.css";

export default function Nav() {
  return (
    <nav className="object-scale-down h-30 w-96">
      <NavLink to="/"><Logo/></NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  );
}