import React from 'react';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Burger from './Burger/Burger';
import HeaderBody from '../HeaderBody/HeaderBody';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className="container">
        <div className="Page-header">
          <Logo />
          <Navigation />
          <Burger />
        </div>
        <HeaderBody />
      </div>
    </header>
  );
};

export default Header;
