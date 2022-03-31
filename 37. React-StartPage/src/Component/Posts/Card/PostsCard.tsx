import React from 'react';
import PostType from '../../../types/PostType';

import './PostsCard.scss';
import notFoundImage from './notfound.png';

type PropsType = {
  data: PostType;
};

const PostsCard: React.FC<PropsType> = ({ data }) => {
  return (
    <div className="Card-wrap">
      <div className="Image">
        {data.image ? (
          <img src={data.image} alt="card" />
        ) : (
          <img src={notFoundImage} alt="notfound" />
        )}
      </div>
      <div className="Title">{data.title}</div>
      <div className="Text">{data.text}</div>
      <div className="Date">{data.date}</div>
    </div>
  );
};

export default PostsCard;
