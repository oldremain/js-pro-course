import React, { useState } from "react";
import FormTextField from "../../UI/FormTextField/FormTextField";
import FormButton from "../../UI/FormButton/FormButton";
import FormValuesType from "../../../types/FormValuesType";
import useTranslate from "../../hooks/useTranslate";

const Controls: React.FC = () => {
    const [values, setValues] = useState<FormValuesType>({});

    const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setValues({});
    };

    const { t } = useTranslate();

    return (
        <form className="Form-body" autoComplete="off">
            <FormTextField
                autofocus
                label={t("registration.name")}
                values={values}
                name="name"
                setValues={setValues}
            />
            <FormTextField
                label={t("registration.email")}
                values={values}
                type="email"
                name="email"
                setValues={setValues}
            />
            <FormTextField
                label={t("registration.password")}
                values={values}
                type="password"
                name="password"
                setValues={setValues}
            />
            <FormTextField
                label={t("registration.confirmPassword")}
                values={values}
                type="password"
                name="passwordConfirm"
                setValues={setValues}
            />
            <FormButton onClick={submitHandler}>
                {t("registration.submit")}
            </FormButton>
        </form>
    );
};

export default Controls;
