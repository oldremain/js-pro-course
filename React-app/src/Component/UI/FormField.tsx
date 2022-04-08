import React from 'react';

import './FormField.scss';

type PropsType = {
  label: string;
  type?: string;
  value: string;
  setValue: (v: string) => void;
};

const FormField: React.FC<PropsType> = ({
  label,
  type = 'text',
  value,
  setValue,
}) => {
  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(e.target.value);
  //   };

  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
};

export default FormField;