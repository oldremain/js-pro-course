import React from 'react';
import Content from './Content/Content';
import Image from './Picture/Image';

import './HeaderBody.scss';

const HeaderBody: React.FC = () => {
  return (
    <div className="Header-body">
      <Content />
      <Image />
    </div>
  );
};

export default HeaderBody;
