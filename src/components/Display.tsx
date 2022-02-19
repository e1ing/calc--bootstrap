import {Col, FormControl, Row} from "react-bootstrap";
import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";

export const Display =() => {
    const num = useSelector<AppRootStateType, string>(state => state.calc.num)
    const result = useSelector<AppRootStateType, string>(state => state.calc.result)

    return (
            <Row className="justify-content-md-center" xs="auto">
                <Col xs sm="5">
                    <FormControl aria-label="Example text with two button addons"
                    value={result.length===0 ? num : result}/>
                </Col>
            </Row>
    )
}