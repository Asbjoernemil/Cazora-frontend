import React from "react";
import SoMe from "./components/SoMe";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

export default function App() {

    return (
        <div>
            <h1>Genbrugstøjbutik</h1>
           
                <BrowserRouter>
                    <Header/>
                    <SoMe />
                </BrowserRouter>
            
        </div>
    );
}




