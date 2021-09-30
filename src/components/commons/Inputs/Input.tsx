import React from "react";

type InputProps = {
    name: string;
    type: string;
};

const Input = ({ name, type }: InputProps): JSX.Element => {
    return type === "textarea" ? (
        <textarea name={name}></textarea>
    ) : (
        <input name={name} type={type} />
    );
};

export default Input;
