import React from "react";

import "./Button.scss";

type PropsType = {
    className: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<PropsType> = ({ className, children, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
