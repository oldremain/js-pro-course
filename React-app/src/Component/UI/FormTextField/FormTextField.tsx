import React, { useEffect, useRef } from "react";
import FormValuesType from "../../../types/FormValuesType";

import "./FormTextField.scss";

type PropsType = {
    autofocus?: boolean;
    label: string;
    type?: string;
    name: string;
    values: FormValuesType;
    setValues: (
        callback: (prevValue: FormValuesType) => FormValuesType
    ) => void;
};

const FormTextField: React.FC<PropsType> = ({
    autofocus,
    label,
    type = "text",
    name,
    values,
    setValues,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus();
        }
        //console.log(inputRef.current);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => {
            return { ...prev, [name]: e.target.value };
        });
    };

    return (
        <label>
            {label}
            <input
                ref={inputRef}
                type={type}
                value={values[name] || ""}
                onChange={handleChange}
            />
        </label>
    );
};

export default FormTextField;
