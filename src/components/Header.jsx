import React from "react";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import About from "../pages/About";
import MainPage from "../pages/MainPage";

export default function Header() {
    return(
        <div>
            —————————————— <br />
            Navigationsbar
             <Nav />
             ——————————————
      
{/* hyperlinks for navigation */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
        </div>

    );
}