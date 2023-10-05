import {Ceramic} from "../models/Ceramic";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";


type DetailProps = {
    loadCeramicById: (id: string) => void,
    ceramic: Ceramic
}

export default function CeramicDetails (props: DetailProps) {
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            props.loadCeramicById(id)
        }
        //eslint-disable-next-line
    }, [id])

    return (
        <div>
            <big>
                {props.ceramic.name}
            </big>

            <button onClick={() => navigate("/")}>Back</button>
        </div>
    )

}