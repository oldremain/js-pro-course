import React, { useContext, useEffect, useState } from 'react';
import PostType from '../../types/PostType';
import PostsCard from './Card/PostsCard';
import Error from './Error/Error';
import Loader from './Loader/Loader';

import './Posts.scss';
import PostsContext from '../../contexts/PostsContext';

type PropsType = {};

type Error = {
  status: boolean;
  name: string;
  message: string;
};

const URL = 'https://studapi.teachmeskills.by/blog/posts/?limit=15&offset=0';

const Posts: React.FC<PropsType> = () => {
  const [post, setPost] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>({
    status: false,
    name: '',
    message: '',
  });

  const { postCount, setCount } = useContext(PostsContext);
  //   console.log('context of count posts = ', postCount, setCount);

  useEffect(() => {
    console.log(post);
  }, [post]);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPost(data.results);
        setCount(data.results.length);
      })
      .catch((error) => {
        setError({ status: true, name: error.name, message: error.message });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="Posts">
      <div className="Posts-wrap">
        {post.map((item) => (
          <PostsCard key={item.id} data={item} />
        ))}
        {loading && <Loader />}
        {error.status && <Error name={error.name} message={error.message} />}
      </div>
      <div className="Post-count">
        Total number posts: <span>{postCount}</span>
      </div>
    </section>
  );
};

export default Posts;
