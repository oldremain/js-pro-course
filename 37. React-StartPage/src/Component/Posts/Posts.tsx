import PostsCard from './Card/PostsCard';
import { postsData } from './Data';
import './Posts.scss';

// type PropsType = {};

const Posts = () => {
  return (
    <div className="Posts-wrap">
      <PostsCard />
      <PostsCard />
      <PostsCard />
      <PostsCard />
      <PostsCard />
      <PostsCard />
      <PostsCard />
    </div>
  );
};

export default Posts;
