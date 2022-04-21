import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import useTranslate from "../../hooks/useTranslate";
import LINKS from "./links";
import animation from "./animation";

import "./Navigation.scss";

type NavigationPropsType = {
    className: string;
};

const Navigation: React.FC<NavigationPropsType> = ({ className }) => {
    const { t } = useTranslate();

    return (
        <nav className={`Header-nav ${className}`}>
            {LINKS.map((link) => {
                return (
                    <motion.div
                        key={link.name}
                        initial={animation.animateFrom}
                        animate={animation.animateTo}
                        transition={animation.transition}
                    >
                        <NavLink
                            to={link.path}
                            className={link.className}
                            style={({ isActive }) => ({
                                fontWeight: isActive ? "bolder" : "",
                            })}
                        >
                            {t(link.name)}
                        </NavLink>
                    </motion.div>
                );
            })}
        </nav>
    );
};

export default Navigation;
