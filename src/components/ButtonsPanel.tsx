import {Button, Col, Row} from "react-bootstrap";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setButton, setClean, setResult} from "../redux/calc-reducer";
import {AppRootStateType} from "../redux/store";

export const ButtonsPanel = () => {

    const dispatch = useDispatch()
    const num = useSelector<AppRootStateType, string>(state => state.calc.num)
    return (
        <>
            <Row className="justify-content-md-center" xs="auto">
                <Col><Button onClick={()=>{dispatch(setButton("1"))}} size="lg" variant="outline-primary">1</Button>{' '}</Col>
                <Col> <Button onClick={()=>{dispatch(setButton("2"))}} size="lg" variant="outline-primary">2</Button>{' '}</Col>
                <Col> <Button onClick={()=>{dispatch(setButton("3"))}} size="lg" variant="outline-primary">3</Button>{' '}</Col>
                <Col> <Button onClick={()=>{dispatch(setButton("+"))}} size="lg" variant="outline-primary">+</Button>{' '}</Col>
            </Row>
            <Row className="justify-content-md-center" xs="auto">
                <Col ><Button onClick={()=>{dispatch(setButton("4"))}} size="lg" variant="outline-primary">4</Button>{' '}</Col>
                <Col> <Button onClick={()=>{dispatch(setButton("5"))}} size="lg" variant="outline-primary">5</Button>{' '}</Col>
                <Col> <Button onClick={()=>{dispatch(setButton("6"))}} size="lg" variant="outline-primary">6</Button>{' '}</Col>
                <Col> <Button onClick={()=>{dispatch(setButton("-"))}} size="lg" variant="outline-primary">-</Button>{' '}</Col>
            </Row>
            <Row className="justify-content-md-center" xs="auto">
                <Col><Button onClick={()=>{dispatch(setButton("7"))}} size="lg" variant="outline-primary">7</Button>{' '}</Col>
                <Col> <Button onClick={()=>{dispatch(setButton("8"))}} size="lg" variant="outline-primary">8</Button>{' '}</Col>
                <Col> <Button onClick={()=>{dispatch(setButton("9"))}} size="lg" variant="outline-primary">9</Button>{' '}</Col>
                <Col> <Button onClick={()=>{dispatch(setButton("*"))}} size="lg" variant="outline-primary">x</Button>{' '}</Col>
            </Row>
            <Row className="justify-content-md-center" xs="auto">
                <Col><Button onClick={()=>{dispatch(setClean(num))}}  size="lg" variant="outline-primary">CE</Button>{' '}</Col>
                <Col> <Button onClick={()=>{dispatch(setButton("0"))}} size="lg" variant="outline-primary">0</Button>{' '}</Col>
                <Col> <Button onClick={()=>{dispatch(setButton("."))}} size="lg" variant="outline-primary">.</Button>{' '}</Col>
                <Col> <Button onClick={()=>{dispatch(setButton("/"))}}size="lg" variant="outline-primary">/</Button>{' '}</Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col  xs sm="5">
                    <div className="d-grid gap-2">
                        <Button onClick={()=>{dispatch(setResult(num))}} className={"btn btn-lg btn-block"} variant="outline-primary">=</Button>
                    </div>
                </Col>
            </Row>
        </>
    )
}