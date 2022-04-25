import React, { useEffect, useRef } from "react";

import "./TextField.scss";

type PropsType = {
    autofocus?: boolean;
    placeholder?: string;
    label?: string;
    type?: string;
    value?: string;
    setValue: (value: string) => void;
};

const TextField: React.FC<PropsType> = ({
    autofocus,
    placeholder,
    label,
    type = "text",
    value,
    setValue,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus();
        }
        //console.log(inputRef.current);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <label>
            {label}
            <input
                ref={inputRef}
                type={type}
                value={value || ""}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </label>
    );
};

export default TextField;
