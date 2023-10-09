import {useEffect, useState} from "react";
import {Ceramic, NewCeramic} from "../models/Ceramic";
import axios from "axios";
import {toast} from "react-toastify";

export default function useCeramics() {
    const [ceramics, setCeramics] = useState<Ceramic[]> ([]);
    const [ceramic, setCeramic] = useState<Ceramic>({id: "", name: "", description: "", price: 0})

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

    function loadCeramicById (id: string) {
        axios.get("/api/ceramics/" + id)
            .then((getCeramicByIdResponse) => {
                setCeramic(getCeramicByIdResponse.data)
                })
            .catch(() => {
                toast.error("Ceramic not found!")
                }
            )
    }


    return {ceramic, setCeramic, loadCeramicById, ceramics, setCeramics, addCeramics}
}