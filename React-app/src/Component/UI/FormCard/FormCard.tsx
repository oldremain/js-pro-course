import React from 'react';
import Caption from './Caption/Caption';

import './FormCard.scss';

type FormCardType = {
  header?: string;
};

const FormCard: React.FC<FormCardType> = ({ header, children }) => {
  return (
    <div className="Form-wrap">
      {header && <Caption header={header} />}
      {children}
    </div>
  );
};

export default FormCard;
