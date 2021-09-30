import React from "react";
import Input from "./Input";

type InputProps = {
    labelName: string;
    name: string;
    type: string;
};

const InputContainer = ({ labelName, name, type }: InputProps) => {
    return (
        <div className="input-container">
            <label htmlFor={name}>{labelName}: </label>
            <Input name={name} type={type} />
        </div>
    );
};

export default InputContainer;
