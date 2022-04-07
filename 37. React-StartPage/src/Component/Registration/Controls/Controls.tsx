import React, { useEffect, useState } from 'react';
import FormField from '../../UI/FormField';
import Button from '../Button/Button';

import './Controls.scss';

const Controls: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('Inputs was changed');
  }, [email, password]);

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({ email, password });
    setEmail('');
    setPassword('');
  };
  return (
    <form action="#" className="Form-body">
      <FormField label="Email" value={email} type="email" setValue={setEmail} />
      <FormField
        label="Password"
        value={password}
        type="password"
        setValue={setPassword}
      />
      <Button onClick={submitHandler} />
    </form>
  );
};

export default Controls;
