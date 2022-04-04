import { useState } from 'react';
import './Form.scss';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const passHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

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
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={emailHandler}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={passHandler}
          />
        </label>
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
