import React from 'react';
import './App.css';
import CeramicGallery from "./components/CeramicGallery";
import useCeramics from "./useCeramics";
import AddCeramic from "./components/AddCeramic";

function App() {

const {ceramics, addCeramics} = useCeramics()


  return (
      <div>
          <AddCeramic ceramics={ceramics} addCeramic={addCeramics}/>
          <CeramicGallery ceramics={ceramics}/>
      </div>
  );
}

export default App;