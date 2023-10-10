import React from 'react';
import styled from 'styled-components';
import CeramicGallery from "./components/CeramicGallery";
import useCeramics from "./hooks/useCeramics";
import AddCeramic from "./components/AddCeramic";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CeramicDetails from "./components/CeramicDetails";

// Styled Components
const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentContainer = styled.div`
    width: 100%;
    max-width: 1000px;
`;

function App() {
    const { ceramic, loadCeramicById, ceramics, addCeramics } = useCeramics();

    return (
        <BrowserRouter>
            <AppContainer>
                <Routes>
                    <Route path="/" element={<ContentContainer>
                        <AddCeramic addCeramic={addCeramics} />
                        <CeramicGallery ceramics={ceramics} />
                    </ContentContainer>} />

                    <Route path="/details/:id"
                           element={
                               <CeramicDetails ceramic={ceramic} loadCeramicById={loadCeramicById}></CeramicDetails>
                           } />
                </Routes>
            </AppContainer>
        </BrowserRouter>
    );
}

export default App;
