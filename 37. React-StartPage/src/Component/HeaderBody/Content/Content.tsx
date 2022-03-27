import './Content.scss';
import Button from '../Button/Button';

const Content = () => {
  return (
    <div className="Header-content">
      <div className="Header-title">New Automation Tool for Your Home</div>
      <div className="Header-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing <br />
        elit. Faucibus tristique vulputate ultrices ut mauris <br />
        tellus at. Posuere sollicitudin odio tellus elit.
      </div>
      <Button />
    </div>
  );
};

export default Content;
