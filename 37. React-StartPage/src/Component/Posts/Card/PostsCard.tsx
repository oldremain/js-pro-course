import './PostsCard.scss';
import PostType from '../../../types/PostType';

// type PropsType = {
//   data: PostType;
// };

const PostsCard = () => {
  const date = new Date();
  return (
    <div className="Card-wrap">
      <div className="Image">
        <img
          src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
          alt="image"
        />
      </div>
      <div className="Title">Some title</div>
      <div className="Text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, optio a
        ut, architecto tempora adipisci saepe dolor rem similique consequuntur
        eius. Sequi praesentium vitae ex ipsam iure. Numquam, asperiores neque?
      </div>
      <div className="Date">{date.toLocaleDateString()}</div>
    </div>
  );
};

export default PostsCard;
