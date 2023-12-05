import React from "react";
import SoMe from "./components/SoMe";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

export default function App() {

    return (
        <div className="font-helvetica">
                <BrowserRouter>
                    <Header/>
                    <SoMe />
                </BrowserRouter>
                    
            
        </div>
    );
}




