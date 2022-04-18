import React from "react";
import { Link } from "react-router-dom";
import useTranslate from "../../hooks/useTranslate";

import "./Help.scss";

const Help: React.FC = () => {
    const { t } = useTranslate();

    return (
        <div className="Help">
            <p>{t("registration.account.question")}</p>
            <Link to="/login">{t("registration.account.link")}</Link>
        </div>
    );
};

export default Help;
