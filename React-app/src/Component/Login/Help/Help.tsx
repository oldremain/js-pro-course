import React from "react";
import useTranslate from "../../hooks/useTranslate";

import "./Help.scss";

const Help: React.FC = () => {
    const { t } = useTranslate();

    return (
        <div className="Help">
            <p>{t("login.forgotPassword.question")}</p>
            <a href="/">{t("login.resetPassword.link")}</a>
        </div>
    );
};

export default Help;
