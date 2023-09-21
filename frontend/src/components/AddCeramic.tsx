import {Ceramic} from "../models/Ceramic";
import {FormEvent, useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #9cbac6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
`;

const Form = styled.form`
  color: #6699cc;
`;

const MyButton = styled.button`
  background-color: inherit;
  border: none;
  padding: 10px 20px;
  color: inherit;
  cursor: pointer;
`;

type Props = {
    ceramics: Ceramic []
    addCeramic: (newCeramic: Ceramic) => void
}

export default function AddCeramic (props: Props)  {
    const [newCeramic, setNewCeramic] = useState<Ceramic>({id: "", name: "hi", description: "", price: 0.00})
    function onSaveCeramic(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (newCeramic.name === undefined || newCeramic.name === "") {
            console.error("name required")
            return
        }
        props.addCeramic(newCeramic)
    }

        return (
            <Container>
                <Form onSubmit={onSaveCeramic}>
                    <label>Name</label>
                    <input
                        type="text"
                        required
                        value={newCeramic.name}
                        onChange={(event) =>
                            setNewCeramic({ ...newCeramic, name: event.target.value })
                        }
                    />
                    <label>Beschreibung</label>
                    <input
                        type="text"
                        value={newCeramic.description}
                        onChange={(event) =>
                            setNewCeramic({ ...newCeramic, description: event.target.value })
                        }
                    />
                    <label>Preis</label>
                    <input
                        type="number"
                        value={newCeramic.price}
                        onChange={(event) =>
                            setNewCeramic({ ...newCeramic, price: parseFloat(event.target.value) })
                        }
                    />
                    <MyButton type="submit">Save</MyButton>
                </Form>
            </Container>
        )
}

