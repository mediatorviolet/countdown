import React from "react";

type ButtonProps = {
    name: string;
    content: string;
};

const Button = ({ name, content }: ButtonProps) => {
    return (
        <button name={name} className="btn">
            {content}
        </button>
    );
};

export default Button;
