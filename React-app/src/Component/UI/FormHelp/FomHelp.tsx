import React from "react";
import { Link } from "react-router-dom";

import "./FormHelp.scss";

type HelpProps = {
    question: string;
    linkText: string;
    path: string;
};

const Help: React.FC<HelpProps> = ({ question, linkText, path }) => {
    return (
        <div className="Help">
            <p>{question}</p>
            <Link to={path}>{linkText}</Link>
        </div>
    );
};

export default Help;
