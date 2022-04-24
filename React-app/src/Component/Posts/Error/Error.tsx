import React from "react";
import PostErrorType from "../../../types/PostErrorType";

import "./Error.scss";

type PropsType = {
    name: string;
    message: string;
    isVisible: boolean;
    setError: (callback: (v: PostErrorType) => PostErrorType) => void;
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
