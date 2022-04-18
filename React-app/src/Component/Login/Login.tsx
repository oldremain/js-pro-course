import React from "react";
import FormCard from "../UI/FormCard/FormCard";
import Controls from "./Controls/Controls";
import Help from "./Help/Help";
import useTranslate from "../hooks/useTranslate";

import "./Login.scss";

const Login: React.FC = () => {
    const { t } = useTranslate();

    return (
        <section className="Form">
            <div className="container">
                <FormCard header={t("login.header")}>
                    <Controls />
                    <Help />
                </FormCard>
            </div>
        </section>
    );
};

export default Login;
