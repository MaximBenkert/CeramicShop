import { Ceramic } from "../models/Ceramic";
import { FormEvent, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #9cbac6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;

const Form = styled.form`
  color: #6699cc;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const MyButton = styled.button`
  background-color: inherit;
  border: none;
  padding: 10px 20px;
  color: inherit;
  cursor: pointer;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

type Props = {
    addCeramic: (newCeramic: Ceramic) => void;
};

export default function AddCeramic(props: Props) {
    const [newCeramic, setNewCeramic] = useState<Ceramic>({
        id: "",
        name: "hi",
        description: "",
        price: 0.0,
    });

    function onSaveCeramic(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (newCeramic.name === undefined || newCeramic.name === "") {
            console.error("name required");
            return;
        }
        props.addCeramic(newCeramic);
    }

    return (
        <Container>
            <Form onSubmit={onSaveCeramic}>
                <InputGroup>
                    <Label>Name</Label>
                    <input
                        type="text"
                        required
                        value={newCeramic.name}
                        onChange={(event) =>
                            setNewCeramic({ ...newCeramic, name: event.target.value })
                        }
                    />
                </InputGroup>
                <InputGroup>
                    <Label>Beschreibung</Label>
                    <input
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
                    <Label>Preis</Label>
                    <input
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
                <MyButton type="submit">Save</MyButton>
            </Form>
        </Container>
    );
}
