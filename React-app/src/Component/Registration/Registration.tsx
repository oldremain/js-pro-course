import React from 'react';
import FormCard from '../UI/FormCard/FormCard';
import Controls from './Controls/Controls';
import Help from './Help/Help';

import './Registration.scss';

const Registration: React.FC = () => {
  return (
    <FormCard header="Registration">
      <Controls />
      <Help />
    </FormCard>
  );
};

export default Registration;
