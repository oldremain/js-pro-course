import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostType from "../../../types/PostType";

import "./PostsCard.scss";
import notFoundImage from "../../../assets/img/notfound.png";

type PropsType = {
    data: PostType;
};

const PostsCard: React.FC<PropsType> = ({ data }) => {
    const [error, setError] = useState(false);

    const handleError = () => {
        setError(true);
    };
    return (
        <Link to={`/posts/${data.id}`} className="Card-wrap">
            <div className="Image">
                {!!data.image && !error ? (
                    <img src={data.image} onError={handleError} alt="card" />
                ) : (
                    <img src={notFoundImage} alt="notfound" />
                )}
            </div>
            <div className="Title">{data.title}</div>
            <div className="Text">{data.text}</div>
            <div className="Date">{data.date}</div>
        </Link>
    );
};

export default PostsCard;
