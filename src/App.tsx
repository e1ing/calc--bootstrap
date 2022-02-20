import React from 'react';
import s from './App.module.css';
import { Container, Card, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Display } from './components/Display';
import { ButtonsPanel } from './components/ButtonsPanel';

function App() {
  return (
    <Container>
      <h2 className={s.h2}>Calculator app</h2>
      <Row className="justify-content-md-center" xs="auto">
        <Card border="primary" style={{ width: '25rem' }} className="mb-2" bg="light">
          <Card.Body>
            <Display />
            <ButtonsPanel />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default App;
