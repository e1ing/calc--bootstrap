import {Button, Col, Row} from "react-bootstrap";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setButton, setClean, setResult} from "../redux/calc-reducer";
import {AppRootStateType} from "../redux/store";
import {CustomButton} from "./CustomButton";

export const ButtonsPanel = () => {

    const dispatch = useDispatch()
    const num = useSelector<AppRootStateType, string>(state => state.calc.num)
    return (
        <>
            <Row className="justify-content-md-center" xs="auto">
                <Col><CustomButton value={"1"} onClick={()=>{dispatch(setButton("1"))}}/></Col>
                <Col> <CustomButton  value={"2"} onClick={()=>{dispatch(setButton("2"))}} /></Col>
                <Col> <CustomButton  value={"3"} onClick={()=>{dispatch(setButton("3"))}} /></Col>
                <Col> <CustomButton value={"+"} onClick={()=>{dispatch(setButton("+"))}}/></Col>
            </Row>
            <Row className="justify-content-md-center" xs="auto">
                <Col ><CustomButton value={"4"} onClick={()=>{dispatch(setButton("4"))}}/></Col>
                <Col> <CustomButton value={"5"} onClick={()=>{dispatch(setButton("5"))}}/></Col>
                <Col> <CustomButton value={"6"} onClick={()=>{dispatch(setButton("6"))}}/></Col>
                <Col> <CustomButton value={"-"} onClick={()=>{dispatch(setButton("-"))}}/></Col>
            </Row>
            <Row className="justify-content-md-center" xs="auto">
                <Col><CustomButton  value={"7"} onClick={()=>{dispatch(setButton("7"))}}/></Col>
                <Col> <CustomButton   value={"8"} onClick={()=>{dispatch(setButton("8"))}}/></Col>
                <Col> <CustomButton  value={"9"} onClick={()=>{dispatch(setButton("9"))}}/></Col>
                <Col> <CustomButton  value={"*"} onClick={()=>{dispatch(setButton("*"))}}/></Col>
            </Row>
            <Row className="justify-content-md-center" xs="auto">
                <Col><CustomButton  value={"CE"} onClick={()=>{dispatch(setClean(num))}} /></Col>
                <Col> <CustomButton  value={"0"} onClick={()=>{dispatch(setButton("0"))}}/></Col>
                <Col> <CustomButton  value={"."} onClick={()=>{dispatch(setButton("."))}}/></Col>
                <Col> <CustomButton  value={"/"} onClick={()=>{dispatch(setButton("/"))}}/></Col>
            </Row>
            <Row className="justify-content-md-center" xs="auto">
                <Col lg={11} style={{padding: "10px"}}>
                    <div className="d-grid gap-2" >
                        <Button onClick={()=>{dispatch(setResult(num))}}  size="lg" variant="primary" style={{minWidth: "60px"}}>=</Button>
                    </div>
                </Col>
            </Row>
        </>
    )
}