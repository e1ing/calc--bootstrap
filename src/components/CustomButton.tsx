import {Button} from "react-bootstrap";
import React, {FC} from "react";

type CustomButtonPropsType = {
    onClick: () => void
    value: string
}


export const CustomButton:FC<CustomButtonPropsType> =({onClick, value}) => {

    return (
        <Button
            onClick={onClick}
            size="lg"
            style={{minWidth: "60px"}}
            variant="outline-primary"
            value={value}
        >{value}
        </Button>


    )
}