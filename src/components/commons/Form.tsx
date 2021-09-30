import React from "react";
import Button from "./Inputs/Button";
import InputContainer from "./Inputs/InputContainer";

const Form = (): JSX.Element => {
    return (
        <div className="form">
            <InputContainer labelName="Name" name="name" type="text" />
            <InputContainer labelName="Date" name="due-date" type="date" />
            <InputContainer
                labelName="Description"
                name="descritpion"
                type="textarea"
            />
            <Button name="submitBtn" content="Create" />
        </div>
    );
};

export default Form;
