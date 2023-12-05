import React from "react";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import About from "../pages/About";
import Create from "../pages/Create";
import Home from "../pages/Home";

export default function Header() {
    return(
        <div className="d-flex justify-content-end">
             <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/create" element={<Create/>} />
            </Routes>
        </div>

    );
}