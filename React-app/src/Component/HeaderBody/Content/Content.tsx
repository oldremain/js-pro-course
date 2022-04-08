import React from 'react';
import Button from '../Button/Button';

import './Content.scss';

const Content: React.FC = () => {
  return (
    <div className="Header-content">
      <h1 className="Header-title">New Automation Tool for Your Home</h1>
      <div className="Header-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing <br />
        elit. Faucibus tristique vulputate ultrices ut mauris <br />
        tellus at. Posuere sollicitudin odio tellus elit.
      </div>
      <Button />
    </div>
  );
};

export default Content;
