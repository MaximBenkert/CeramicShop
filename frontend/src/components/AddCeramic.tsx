import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { Ceramic } from '../models/Ceramic';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  background-color: #f5f5f5;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 24px;
  width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 24px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #666;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

type Props = {
    addCeramic: (newCeramic: Ceramic) => void;
};

export default function AddCeramic(props: Readonly<Props>) {
    const [newCeramic, setNewCeramic] = useState<Ceramic>({
        id: '',
        name: '',
        description: '',
        price: 0.0,
    });

    function onSaveCeramic(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!newCeramic.name) {
            console.error('Name is required');
            return;
        }
        props.addCeramic(newCeramic);
    }

    return (
        <Container>
            <FormContainer>
                <Title>Add a New Ceramic</Title>
                <form onSubmit={onSaveCeramic}>
                    <InputGroup>
                        <Label>Name</Label>
                        <Input
                            type="text"
                            required
                            value={newCeramic.name}
                            onChange={(event) =>
                                setNewCeramic({ ...newCeramic, name: event.target.value })
                            }
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label>Description</Label>
                        <Input
                            type="text"
                            required
                            value={newCeramic.description}
                            onChange={(event) =>
                                setNewCeramic({
                                    ...newCeramic,
                                    description: event.target.value,
                                })
                            }
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label>Price</Label>
                        <Input
                            type="number"
                            value={newCeramic.price}
                            onChange={(event) =>
                                setNewCeramic({
                                    ...newCeramic,
                                    price: parseFloat(event.target.value),
                                })
                            }
                        />
                    </InputGroup>
                    <Button type="submit">Save</Button>
                </form>
            </FormContainer>
        </Container>
    );
}
