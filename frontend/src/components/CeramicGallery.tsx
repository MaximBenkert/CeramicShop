import {Ceramic} from "../models/Ceramic";
import CeramicCard from "./CeramicCard";
import React from 'react';

type Props = {
    ceramics: Ceramic []
}

export default function CeramicGallery(props: Props) {
    return(
        <div>
            {props.ceramics.map((ceramic)=>{
                return (
                    <CeramicCard key={ceramic.id} ceramic={ceramic}/>
                )
            })
            }
        </div>
    )
}