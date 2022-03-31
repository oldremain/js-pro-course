import PostsCard from './Card/PostsCard';
import { postsData } from './Data';

import './Posts.scss';

type PropsType = {};

const Posts: React.FC<PropsType> = () => {
  return (
    <div className="Posts-wrap">
      {postsData.map((item) => (
        <PostsCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Posts;
