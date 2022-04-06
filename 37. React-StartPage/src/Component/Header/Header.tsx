import React from 'react';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Burger from './Burger/Burger';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="Page-header">
      <Logo />
      <Navigation />
      <Burger />
    </div>
  );
};

export default Header;
