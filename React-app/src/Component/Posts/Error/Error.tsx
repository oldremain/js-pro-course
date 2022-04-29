import React from "react";
import { PostActionType } from "../../../store/post/types";
import PostErrorType from "../../../types/PostErrorType";

import "./Error.scss";

type PropsType = {
    name: string;
    message: string;
    isVisible: boolean;
    setError: (v: PostErrorType) => void;
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
                        setError({
                            status: true,
                            name,
                            message,
                            isVisible: false,
                        });
                    }}
                >
                    Ok
                </button>
            </div>
        </>
    );
};

export default Error;
