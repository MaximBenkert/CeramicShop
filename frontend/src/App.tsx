import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {Ceramic} from "./models/Ceramic";
import CeramicGallery from "./components/CeramicGallery";

function App() {

  const [ceramics, setCeramics] = useState<Ceramic[]> ([]);

  useEffect(() =>{
    loadAllCeramics()
  }, [])

  function loadAllCeramics() {
    axios.get("/api/ceramics")
        .then((getAllCeramicsResponse) =>
        {
          setCeramics(getAllCeramicsResponse.data)
        })
        .catch(reason => console.error(reason))
  }


  return (
      <CeramicGallery ceramics={ceramics}/>
  );
}

export default App;