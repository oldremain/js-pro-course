import React from "react";
import FormCard from "../UI/FormCard/FormCard";
import Controls from "./Controls/Controls";
import Help from "../UI/FormHelp/FomHelp";
import useTranslate from "../hooks/useTranslate";

import "./Login.scss";

const Login: React.FC = () => {
    const { t } = useTranslate();

    return (
        <section className="Form">
            <div className="container">
                <FormCard header={t("login.header")}>
                    <Controls />
                    <Help
                        question={t("login.forgotPassword.question")}
                        linkText={t("login.resetPassword.link")}
                        path={"/"}
                    />
                </FormCard>
            </div>
        </section>
    );
};

export default Login;
