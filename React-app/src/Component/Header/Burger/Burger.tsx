import React from 'react';
import { CgMenu as OpenIcon, CgClose as CloseIcon } from 'react-icons/cg';

import './Burger.scss';

type BurgerPropsType = {
  open: boolean;
  size: string;
  color: string;
  onClick: () => void;
};

const Burger: React.FC<BurgerPropsType> = ({
  open,
  size,
  color,
  onClick,
}): any => {
  return (
    <>
      {open ? (
        <CloseIcon size={size} color={color} onClick={onClick} />
      ) : (
        <OpenIcon size={size} color={color} onClick={onClick} />
      )}
    </>
  );
};

export default Burger;
