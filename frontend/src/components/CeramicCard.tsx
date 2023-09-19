import {Ceramic} from "../models/Ceramic";
import React from 'react';


type CardProps = {
    ceramic: Ceramic
}

export default function CeramicCard(props: CardProps) {

    return (
        <div>
            <div>{props.ceramic.name}</div>
        </div>
    )
}