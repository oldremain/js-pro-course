import React from "react";

import "./Caption.scss";

type CaptionPropsType = {
    header: string;
};

const Caption: React.FC<CaptionPropsType> = ({ header }) => {
    return (
        <div className="Form-header-container">
            <div className="Form-header">{header}</div>
        </div>
    );
};

export default Caption;
