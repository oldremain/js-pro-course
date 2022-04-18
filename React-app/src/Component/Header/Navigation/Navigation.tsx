import React from "react";
import { motion } from "framer-motion";
import useTranslate from "../../hooks/useTranslate";

import "./Navigation.scss";
import { NavLink } from "react-router-dom";

type NavigationPropsType = {
    className: string;
};

type RefsType = {
    name: string;
    path: string;
    className?: string;
};

const Navigation: React.FC<NavigationPropsType> = ({ className }) => {
    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };
    const transition = { duration: 0.7, delay: 0.2 };

    const refs: Array<RefsType> = [
        {
            name: "header.nav.link.home",
            path: "/",
        },
        {
            name: "header.nav.link.posts",
            path: "/posts",
        },
        {
            name: "header.nav.link.registration",
            path: "/registration",
            className: "_registration",
        },
        {
            name: "header.nav.link.login",
            path: "/login",
        },
    ];

    const { t } = useTranslate();

    return (
        <nav className={`Header-nav ${className}`}>
            {refs.map((ref) => {
                return (
                    <motion.div
                        key={ref.name}
                        initial={animateFrom}
                        animate={animateTo}
                        transition={transition}
                    >
                        <NavLink to={ref.path} className={ref.className}>
                            {t(ref.name)}
                        </NavLink>
                    </motion.div>
                );
            })}
        </nav>
    );
};

export default Navigation;
