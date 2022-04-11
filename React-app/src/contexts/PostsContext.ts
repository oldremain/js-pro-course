import React from 'react';

type PostsContextType = {
  postCount: number;
  setCount: (post: number) => void;
};

const PostsContext = React.createContext<PostsContextType>(
  {} as PostsContextType
); // ???? попробывал вместо any
console.log(PostsContext);

export default PostsContext;
