import {Button, Col, Row} from "react-bootstrap";
import React from "react";

export const ButtonsPanel = () => {
    return (
        <>
            <Row className="justify-content-md-center" xs="auto">
                <Col><Button value= "1" size="lg" variant="outline-primary">1</Button>{' '}</Col>
                <Col> <Button value= "2" size="lg" variant="outline-primary">2</Button>{' '}</Col>
                <Col> <Button value= "3" size="lg" variant="outline-primary">3</Button>{' '}</Col>
                <Col> <Button value= "+" size="lg" variant="outline-primary">+</Button>{' '}</Col>
            </Row>
            <Row className="justify-content-md-center" xs="auto">
                <Col ><Button value= "4" size="lg" variant="outline-primary">4</Button>{' '}</Col>
                <Col> <Button value= "5" size="lg" variant="outline-primary">5</Button>{' '}</Col>
                <Col> <Button value= "6" size="lg" variant="outline-primary">6</Button>{' '}</Col>
                <Col> <Button value= "-" size="lg" variant="outline-primary">-</Button>{' '}</Col>
            </Row>
            <Row className="justify-content-md-center" xs="auto">
                <Col><Button value= "7" size="lg" variant="outline-primary">7</Button>{' '}</Col>
                <Col> <Button value= "8" size="lg" variant="outline-primary">8</Button>{' '}</Col>
                <Col> <Button value= "9" size="lg" variant="outline-primary">9</Button>{' '}</Col>
                <Col> <Button value= "*" size="lg" variant="outline-primary">x</Button>{' '}</Col>
            </Row>
            <Row className="justify-content-md-center" xs="auto">
                <Col><Button size="lg" variant="outline-primary">CE</Button>{' '}</Col>
                <Col> <Button size="lg" variant="outline-primary">0</Button>{' '}</Col>
                <Col> <Button size="lg" variant="outline-primary">.</Button>{' '}</Col>
                <Col> <Button size="lg" variant="outline-primary">/</Button>{' '}</Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col  xs sm="5">
                    <div className="d-grid gap-2">
                        <Button className={"btn btn-lg btn-block"} variant="outline-primary">=</Button>
                    </div>
                </Col>
            </Row>
        </>
    )
}