import React from 'react';

import './Navigation.scss';

const Navigation: React.FC = () => {
  return (
    <nav className="Header-nav">
      <a href="/">About</a>
      <a href="/">What we do</a>
      <a href="/">Project</a>
      <a href="/">How it work with us</a>
    </nav>
  );
};

export default Navigation;
