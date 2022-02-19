import {Col, FormControl, Row} from "react-bootstrap";
import React from "react";

export const Display =() => {
    return (
            <Row className="justify-content-md-center" xs="auto">
                <Col xs sm="5"> <FormControl aria-label="Example text with two button addons"/></Col>
            </Row>
    )
}