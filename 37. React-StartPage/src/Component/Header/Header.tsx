import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import './Header.scss';

const Header = () => {
  return (
    <div className="Page-header">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
