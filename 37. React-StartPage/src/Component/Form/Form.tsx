import React, { useState } from 'react';
import FormField from '../UI/FormField';

import './Form.scss';

const Form: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert('Welcome');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="Form-wrap">
      <div className="Form-caption">
        <div className="Login">Login</div>
        <div className="Registration">Registration</div>
      </div>
      <form action="#" className="Form-body" onSubmit={submitHandler}>
        <FormField label="Email" value={email} setValue={setEmail} />
        <FormField label="Password" value={password} setValue={setPassword} />
        <button type="submit" className="Form-btn">
          Login
        </button>
      </form>
      <div className="Help">
        <p>Forgot your password ?</p>
        <a href="/">Reset password</a>
      </div>
    </div>
  );
};

export default Form;
