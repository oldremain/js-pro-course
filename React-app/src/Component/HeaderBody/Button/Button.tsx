import React, { MouseEventHandler } from "react";
import useTranslate from "../../hooks/useTranslate";

import "./Button.scss";

type PropsType = {
    className: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<PropsType> = ({ className, children, onClick }) => {
    const { t } = useTranslate();
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
