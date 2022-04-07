import React from 'react';

import './Logo.scss';
import logo from '../../../assets/img/logo.jpg';

const Logo: React.FC = () => {
  return (
    <a href="/" className="Header-logo ">
      <img src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
