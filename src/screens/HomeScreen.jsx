import React from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ScriptTextEdit from './components/ScriptTextEdit'

const Home = () => {

    return (
        <main>
            <Container>
                <Row>
                    <Col>
                        <h1>Home</h1>
                        <ScriptTextEdit />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Home