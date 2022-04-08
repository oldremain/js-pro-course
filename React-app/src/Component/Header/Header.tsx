import React, { useState } from 'react';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Burger from './Burger/Burger';
import HeaderBody from '../HeaderBody/HeaderBody';

import './Header.scss';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen((open) => !open);
    console.log(open, 'status was changed');
  };

  return (
    <header className="Header">
      <div className="container">
        <div className="Page-header">
          <Logo />
          {open && <Navigation className={'mobile'} />}
          <Navigation className={'desktop'} />
          <Burger onClick={clickHandler} />
        </div>
        <HeaderBody />
      </div>
    </header>
  );
};

export default Header;
