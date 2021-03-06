import React from "react";
import Button from "../Button/Button";
import useTranslate from "../../hooks/useTranslate";

import "./Content.scss";

const Content: React.FC = () => {
    const { t } = useTranslate();

    return (
        <div className="Header-content">
            <h1 className="Header-title">{t("header.mainPage.title")}</h1>
            <div className="Header-subtitle">
                {t("header.mainPage.subtitle")}
            </div>
            <Button />
        </div>
    );
};

export default Content;
