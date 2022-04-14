import React from "react";
import { motion } from "framer-motion";
import useTranslate from "../../hooks/useTranslate";

import "./Navigation.scss";

type NavigationPropsType = {
    className: string;
};

const Navigation: React.FC<NavigationPropsType> = ({ className }) => {
    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };
    const transition = { duration: 0.7, delay: 0.2 };

    const refs = [
        {
            name: "header.nav.link.about",
            path: "/1",
        },
        {
            name: "header.nav.link.howItWork",
            path: "/2",
        },
        {
            name: "header.nav.link.project",
            path: "/3",
        },
        {
            name: "header.nav.link.whatWeDo",
            path: "/4",
        },
    ];

    const { t } = useTranslate();
    //console.log(lang);

    return (
        <nav className={`Header-nav ${className}`}>
            {refs.map((ref) => {
                return (
                    <motion.a
                        initial={animateFrom}
                        animate={animateTo}
                        transition={transition}
                        href={ref.path}
                        key={ref.name}
                    >
                        {t(ref.name)} {/* перевод ссылки */}
                    </motion.a>
                );
            })}
        </nav>
    );
};

export default Navigation;
