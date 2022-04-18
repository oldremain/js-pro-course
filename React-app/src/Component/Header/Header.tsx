import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Burger from "./Burger/Burger";
//import HeaderBody from "../HeaderBody/HeaderBody";
import Language from "./SwitchLanguage/Language";

import "./Header.scss";

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);

    const clickHandler = () => {
        setOpen((open) => !open);
    };

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);

    return (
        <header className="Header">
            <div className="container">
                <div className="Page-header">
                    <Logo />
                    {open && <Navigation className={"mobile"} />}
                    <Navigation className={"desktop"} />
                    {/*show only on desktop*/}
                    <Burger
                        open={open}
                        size={"30px"}
                        color={"#356ead"}
                        onClick={clickHandler}
                    />
                    <Language />
                </div>
                <Outlet />
            </div>
        </header>
    );
};

export default Header;
