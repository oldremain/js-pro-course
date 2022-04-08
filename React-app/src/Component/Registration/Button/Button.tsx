import React from 'react';

import './Button.scss';

type PropsType = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<PropsType> = ({ onClick }) => {
  return (
    <button className="Form-btn" onClick={onClick}>
      Login
    </button>
  );
};

export default Button;
