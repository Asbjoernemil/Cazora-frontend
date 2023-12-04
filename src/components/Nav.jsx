import { NavLink } from "react-router-dom";
import Logo from "./visuals/Logo.jsx";

  {/* hyperlinks for navigation */}
export default function Nav() {
  return (
    <div>
         <div className="h-20 m-5">
            <NavLink to="/"><Logo/></NavLink>
         </div>
        <nav className="flex justify-end gap-5 m-5" >
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/admin">Admin</NavLink>
        </nav>
    </div>
  );
}