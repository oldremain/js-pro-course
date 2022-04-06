import React from 'react';
import Caption from './Caption/Caption';
import Controls from './Controls/Controls';
import Help from './Help/Help';

import './Form.scss';

const Form: React.FC = () => {
  return (
    <section className="Form">
      <div className="container">
        <div className="Form-wrap">
          <Caption />
          <Controls />
          <Help />
        </div>
      </div>
    </section>
  );
};

export default Form;
