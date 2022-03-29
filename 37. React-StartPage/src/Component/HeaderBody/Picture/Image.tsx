import './Image.scss';
import background from './back.jpg';

const Image = () => {
  return (
    <div className="Header-image">
      <img src={background} alt="image" />
    </div>
  );
};

export default Image;
