import { NavLink } from "react-router-dom";
import Logo from "./visuals/Logo.jsx";

{/* hyperlinks for navigation */ }
export default function Nav() {
  return (
    <div className="flex justify-between items-center p-5">
      <div className="w-full">
        <NavLink to="/" className={"h-20"}><Logo /></NavLink>
      </div>
      <nav className="flex justify-end gap-5 m-5" >
        <NavLink to="/gallery" className={"hover:text-teal-200"}>Gallery</NavLink>
        <NavLink to="/contact" className={"hover:text-teal-200"}>Contact</NavLink>
        <NavLink to="/about" className={"hover:text-teal-200"}>About</NavLink>
        <NavLink to="/admin" className={"hover:text-teal-200"}>Admin</NavLink>
      </nav>
    </div>
  );
}