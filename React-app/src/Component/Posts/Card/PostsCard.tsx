import React from "react";
import { Link } from "react-router-dom";
import Image from "../../PostImage/Image";
import PostType from "../../../types/PostType";

import "./PostsCard.scss";

type PropsType = {
    data: PostType;
};

const PostsCard: React.FC<PropsType> = ({ data }) => {
    return (
        <Link to={`/posts/${data.id}`} className="Card-wrap">
            <Image data={data} />
            <div className="Title">{data.title}</div>
            <div className="Text">{data.text}</div>
            <div className="Date">{data.date}</div>
        </Link>
    );
};

export default PostsCard;
