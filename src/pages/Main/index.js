import React from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles'
export default function Main() {
    return (
        <Container>
            <h1>
                <FaGithub/>
                Repositórios
            </h1>

            <Form onSubmit={() => {}}>
                <input
                    type="text"
                    placeholder="Adicionar repósitorio"
                />

                <SubmitButton  disable>
                    <FaPlus color="#fff" size={14} />
                </SubmitButton >

            </Form>
        </Container>
    );

}

