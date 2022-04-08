import React from 'react';

import './Navigation.scss';

type NavigationPropsType = {
  className: string;
};

const Navigation: React.FC<NavigationPropsType> = ({ className }) => {
  return (
    <nav className={`Header-nav ${className}`}>
      <a href="/">About</a>
      <a href="/">What we do</a>
      <a href="/">Project</a>
      <a href="/">How it work with us</a>
    </nav>
  );
};

export default Navigation;
