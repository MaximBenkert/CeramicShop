import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {Ceramic} from "../models/Ceramic";

// Styled Components für die Komponente erstellen
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const CeramicInfo = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CeramicTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CeramicDescription = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CeramicPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const BackButton = styled.button`
  background-color: #0077cc;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0055aa;
  }
`;

type DetailProps = {
    loadCeramicById: (id: string) => void;
    ceramic: Ceramic;
};

export default function CeramicDetails(props: DetailProps) {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            props.loadCeramicById(id);
        }
        // eslint-disable-next-line
    }, [id]);

    return (
        <Container>
            <CeramicInfo>
                <CeramicTitle>{props.ceramic.name}</CeramicTitle>
                <CeramicDescription>{props.ceramic.description}</CeramicDescription>
                <CeramicPrice>{props.ceramic.price}</CeramicPrice>
            </CeramicInfo>
            <BackButton onClick={() => navigate("/")}>Back</BackButton>
        </Container>
    );
}
