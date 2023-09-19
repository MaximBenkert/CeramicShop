import React from 'react';
import styled from 'styled-components';
import { Ceramic } from '../models/Ceramic';
import CeramicCard from './CeramicCard';

// Stilisierte Komponente für die Galerie erstellen
const GalleryContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; // Elemente werden umgebrochen, wenn der Platz nicht ausreicht
    justify-content: space-evenly; // Abstand zwischen den Karten
`;

export type Props = {
    ceramics: Ceramic[];
}

export default function CeramicGallery(props: Props) {
    return (
        <GalleryContainer>
            {props.ceramics.map((ceramic) => (
                <CeramicCard key={ceramic.id} ceramic={ceramic} />
            ))}
        </GalleryContainer>
    )
}
