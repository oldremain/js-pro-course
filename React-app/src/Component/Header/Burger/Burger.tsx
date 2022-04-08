import React from 'react';

import './Burger.scss';

type BurgerPropsType = {
  onClick: () => void;
};

const Burger: React.FC<BurgerPropsType> = ({ onClick }) => {
  return (
    <div className="Header-burger" onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
