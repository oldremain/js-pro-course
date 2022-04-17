import React from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";
import logo from "../../../assets/img/logo.jpg";

const Logo: React.FC = () => {
    return (
        <Link to="/" className="Header-logo ">
            <img src={logo} alt="logo" />
            <div className="Logo-name">Atomic</div>
        </Link>
    );
};

export default Logo;
