import {useEffect, useState} from "react";
import {Ceramic, NewCeramic} from "./models/Ceramic";
import axios from "axios";

export default function useCeramics() {
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

    function addCeramics(ceramic: NewCeramic) {
        axios.post("/api/ceramics", ceramic)
            .then(ceramicAddedResponse => ceramicAddedResponse.data)
            .then(data => setCeramics([...ceramics, data]))
            .catch(reason => console.error(reason))
    }


    return {ceramics, setCeramics, addCeramics}
}