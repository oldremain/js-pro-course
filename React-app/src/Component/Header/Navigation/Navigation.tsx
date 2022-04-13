import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import './Navigation.scss';
import useTranslate from '../../hooks/useTranslate';
//import LanguageContext from '../../../contexts/LanguageContext';

type NavigationPropsType = {
    className: string;
};

const Navigation: React.FC<NavigationPropsType> = ({ className }) => {
    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };
    const transition = { duration: 0.7, delay: 0.2 };

    const refs = [
        { nameEng: 'About', nameRu: 'О компании', path: '/' },
        { nameEng: 'What we do', nameRu: 'Наша деятельность', path: '/' },
        { nameEng: 'Project', nameRu: 'Проекты', path: '/' },
        { nameEng: 'How it work with us', nameRu: 'Работа с нами', path: '/' },
    ];

    //const { lang } = useContext(LanguageContext);

    const { lang, setLang } = useTranslate();

    return (
        <nav className={`Header-nav ${className}`}>
            {refs.map((ref) => {
                return (
                    <motion.a
                        initial={animateFrom}
                        animate={animateTo}
                        transition={transition}
                        href={ref.path}
                        key={ref.nameEng}
                    >
                        {lang === 'eng' ? ref.nameEng : ref.nameRu}
                    </motion.a>
                );
            })}
        </nav>
    );
};

export default Navigation;
