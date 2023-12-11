import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Update from "./pages/Update";
import Delete from "./pages/Delete";


export default function App() {

    return (
        <div className="font-helvetica w-full p-4">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/update" element={<Update />} />
                    <Route path="/update/:id" element={<Update />} />
                    <Route path="/delete/:id" element={<Delete />} />
                </Routes>
                <Footer />
            </BrowserRouter>


        </div>
    );
}