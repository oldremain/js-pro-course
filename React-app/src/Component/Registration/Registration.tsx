import React from "react";
import FormCard from "../UI/FormCard/FormCard";
import Controls from "./Controls/Controls";
import Help from "./Help/Help";
import useTranslate from "../hooks/useTranslate";

import "./Registration.scss";

const Registration: React.FC = () => {
    const { t } = useTranslate();

    return (
        <FormCard header={t("registration.header")}>
            <Controls />
            <Help />
        </FormCard>
    );
};

export default Registration;
