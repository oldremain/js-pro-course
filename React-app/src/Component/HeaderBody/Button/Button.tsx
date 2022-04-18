import React from "react";
import useTranslate from "../../hooks/useTranslate";

import "./Button.scss";

const Button: React.FC = () => {
    const { t } = useTranslate();
    return (
        <button className="Header-btn" onClick={(e) => e.preventDefault()}>
            <a href="/">{t("header.mainPage.btn")}</a>
        </button>
    );
};

export default Button;
