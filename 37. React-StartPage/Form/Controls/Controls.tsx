import React, { useState } from 'react';
import FormField from '../../UI/FormField';
import Button from '../Button/Button';

import './Controls.scss';

const Controls: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert('Welcome');
    setEmail('');
    setPassword('');
  };
  return (
    <form action="#" className="Form-body" onSubmit={submitHandler}>
      <FormField label="Email" value={email} setValue={setEmail} />
      <FormField label="Password" value={password} setValue={setPassword} />
      <Button />
    </form>
  );
};

export default Controls;
