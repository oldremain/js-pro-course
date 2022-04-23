import React from "react";

import "./FormButton.scss";

type PropsType = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const FormButton: React.FC<PropsType> = ({ onClick, children }) => {
    return (
        <button className="Form-btn" onClick={onClick}>
            {children}
        </button>
    );
};

export default FormButton;
