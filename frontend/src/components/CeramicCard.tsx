import React from 'react';
import styled from 'styled-components';
import { Ceramic } from '../models/Ceramic';
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
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
  font-size: 16px;
  color: #007bff;
  margin-top: auto;
`;

const DetailsButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export type CardProps = {
    ceramic: Ceramic;
};

export default function CeramicCard(props: CardProps) {
    const navigate = useNavigate();

    return (
        <CardContainer>
            <CeramicName>{props.ceramic.name}</CeramicName>
            <CeramicDescription>{props.ceramic.description}</CeramicDescription>
            <CeramicPrice>${props.ceramic.price}</CeramicPrice>
            <DetailsButton onClick={() => navigate(`/details/${props.ceramic.id}`)}>
                Details
            </DetailsButton>
        </CardContainer>
    );
}
