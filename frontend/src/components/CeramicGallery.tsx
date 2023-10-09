import React from 'react';
import styled from 'styled-components';
import { Ceramic } from '../models/Ceramic';
import CeramicCard from './CeramicCard';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;
`;

export type Props = {
    ceramics: Ceramic[];
};

export default function CeramicGallery(props: Props) {
    return (
        <GalleryContainer>
            {props.ceramics.map((ceramic) => (
                <CeramicCard key={ceramic.id} ceramic={ceramic} />
            ))}
        </GalleryContainer>
    );
}
