import React from 'react';
import { motion } from 'framer-motion';

import './Navigation.scss';

type NavigationPropsType = {
  className: string;
};

const Navigation: React.FC<NavigationPropsType> = ({ className }) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  const transition = { duration: 0.7, delay: 0.2 };

  const refs = [
    { name: 'About', path: '/' },
    { name: 'What we do', path: '/' },
    { name: 'Project', path: '/' },
    { name: 'How it work with us', path: '/' },
  ];

  return (
    <nav className={`Header-nav ${className}`}>
      {refs.map((ref) => {
        return (
          <motion.a
            initial={animateFrom}
            animate={animateTo}
            transition={transition}
            href={ref.path}
          >
            {ref.name}
          </motion.a>
        );
      })}
    </nav>
  );
};

export default Navigation;
