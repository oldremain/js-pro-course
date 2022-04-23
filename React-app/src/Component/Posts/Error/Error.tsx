import React from "react";
import { ErrorType } from "../../../apiHooks/usePostRequest";

import "./Error.scss";

type PropsType = {
    name: string;
    message: string;
    isVisible: boolean;
    setError: (callback: (v: ErrorType) => ErrorType) => void;
};

const Error: React.FC<PropsType> = ({ isVisible, setError, name, message }) => {
    return (
        <>
            <div
                className="Error"
                style={{ display: isVisible ? "flex" : "none" }}
            >
                <div className="Error-title">{name}</div>
                <div className="Error-text">{message}</div>
                <button
                    className="Error-btn"
                    onClick={() => {
                        setError((prevValue) => ({
                            ...prevValue,
                            isVisible: false,
                        }));
                    }}
                >
                    Ok
                </button>
            </div>
        </>
    );
};

export default Error;
