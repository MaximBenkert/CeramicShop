import React from 'react';
import styled from 'styled-components';
import { Ceramic } from '../models/Ceramic';

// Stilisierte Komponenten erstellen
const CardContainer = styled.div`
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(33.33vw - 32px); // Breite auf etwa 1/3 der Viewport-Breite setzen
    box-sizing: border-box;
`;

const CeramicName = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
`;

const CeramicDescription = styled.div`
    font-size: 14px;
    margin-bottom: 8px;
`;

const CeramicPrice = styled.div`
    font-weight: bold;
`;

export type CardProps = {
    ceramic: Ceramic
}

export default function CeramicCard(props: CardProps) {
    return (
        <CardContainer>
            <CeramicName>{props.ceramic.name}</CeramicName>
            <CeramicDescription>{props.ceramic.description}</CeramicDescription>
            <CeramicPrice>${props.ceramic.price}</CeramicPrice>
        </CardContainer>
    )
}
