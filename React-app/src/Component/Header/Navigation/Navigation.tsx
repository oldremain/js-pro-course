import React from 'react';
import { motion } from 'framer-motion';
import eng from '../../../translations/eng.json';
import ru from '../../../translations/ru.json';

import './Navigation.scss';
import useTranslate from '../../hooks/useTranslate';

type NavigationPropsType = {
    className: string;
};

const Navigation: React.FC<NavigationPropsType> = ({ className }) => {
    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };
    const transition = { duration: 0.7, delay: 0.2 };

    const refs = [
        {
            name: 'header.nav.about',
            path: '/1',
        },
        {
            name: 'header.nav.howItWork',
            path: '/2',
        },
        {
            name: 'header.nav.project',
            path: '/3',
        },
        {
            name: 'header.nav.whatWeDo',
            path: '/4',
        },
    ];

    const { lang, t } = useTranslate();
    console.log(lang);

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
                        {/* {lang === 'eng' ? ref.nameEng : ref.nameRu} */}
                        {t(ref.name)}
                    </motion.a>
                );
            })}
        </nav>
    );
};

export default Navigation;
