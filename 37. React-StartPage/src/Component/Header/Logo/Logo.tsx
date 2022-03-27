import './Logo.scss';
import logo from './logo.jpg';

const Logo = () => {
  return (
    <a href="/" className="Header-logo ">
      <img src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
