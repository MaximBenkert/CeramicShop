import React from 'react';
import './App.css';
import CeramicGallery from "./components/CeramicGallery";
import useCeramics from "./hooks/useCeramics";
import AddCeramic from "./components/AddCeramic";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CeramicDetails from "./components/CeramicDetails";

function App() {
    const { ceramic, loadCeramicById, ceramics, addCeramics } = useCeramics();

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<div>
                        <AddCeramic addCeramic={addCeramics} />
                        <CeramicGallery ceramics={ceramics} />
                    </div>} />

                    <Route path="/details/:id"
                           element={
                               <CeramicDetails ceramic={ceramic} loadCeramicById={loadCeramicById}></CeramicDetails>
                        } />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
