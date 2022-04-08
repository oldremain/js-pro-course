import React, { useEffect, useState } from 'react';
import PostType from '../../types/PostType';
import PostsCard from './Card/PostsCard';
import Error from './Error/Error';
import Loader from './Loader/Loader';

import './Posts.scss';

type PropsType = {};

type Error = {
  status: boolean;
  name: string;
  message: string;
};

const URL = 'https://studapi.teachmeskills.by/blog/posts/?limit=20&offset=0';

const Posts: React.FC<PropsType> = () => {
  const [post, setPost] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>({
    status: false,
    name: '',
    message: '',
  });

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
      .then((data) => setPost(data.results))
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
        {loading ? <Loader /> : ''}
        {error.status ? (
          <Error name={error.name} message={error.message} />
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default Posts;
