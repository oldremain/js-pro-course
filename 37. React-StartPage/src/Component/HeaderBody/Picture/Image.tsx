import React from 'react';

import './Image.scss';
import background from '../../../assets/img/background.jpg';

const Image: React.FC = () => {
  return (
    <div className="Header-image">
      <img src={background} alt="background" />
    </div>
  );
};

export default Image;
