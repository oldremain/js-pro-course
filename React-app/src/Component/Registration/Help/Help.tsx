import React from "react";
import useTranslate from "../../hooks/useTranslate";

import "./Help.scss";

const Help: React.FC = () => {
    const { t } = useTranslate();

    return (
        <div className="Help">
            <p>{t("registration.forgotPassword.question")}</p>
            <a href="/">{t("registration.resetPassword.link")}</a>
        </div>
    );
};

export default Help;
