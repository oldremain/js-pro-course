import React, { useState } from "react";
import FormField from "../../UI/FormField/FormField";
import Button from "../../UI/Button/Button";
import FormValuesType from "../../../types/FormValuesType";
import useTranslate from "../../hooks/useTranslate";

import "./Controls.scss";

const Controls: React.FC = () => {
    const [values, setValues] = useState<FormValuesType>({});

    const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setValues({});
    };

    const { t } = useTranslate();

    return (
        <form className="Form-body" autoComplete="off">
            <FormField
                autofocus
                label={t("registration.email")}
                values={values}
                type="email"
                name="email"
                setValues={setValues}
            />
            <FormField
                label={t("registration.password")}
                values={values}
                type="password"
                name="password"
                setValues={setValues}
            />
            <Button onClick={submitHandler}>{t("login.submit")}</Button>
        </form>
    );
};

export default Controls;
