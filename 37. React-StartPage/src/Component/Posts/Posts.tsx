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

const URL = 'ttps://studapi.teachmeskills.by/blog/posts/?limit=10&offset=0';

const Posts: React.FC<PropsType> = () => {
  const [post, setPost] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>({
    status: false,
    name: '',
    message: '',
  });

  useEffect(() => {
    console.log('Hi useEffect');
    console.log(post);
  }, [post]);

  useEffect(() => {
    setLoading(true);
    setTimeout(fetchData, 2000);
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
    <div className="Posts-wrap">
      {post.map((item) => (
        <PostsCard key={item.id} data={item} />
      ))}
      {loading ? <Loader /> : ''}
      {error.status ? <Error name={error.name} message={error.message} /> : ''}
    </div>
  );
};

export default Posts;
