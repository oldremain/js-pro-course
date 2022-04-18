import React from "react";
import { Link, useParams } from "react-router-dom";
import useSinglePost from "../hooks/useSinglePost";
import Image from "../PostImage/Image";
import Loader from "../Posts/Loader/Loader";
import Error from "../Posts/Error/Error";

import "./PostId.scss";

const PostId: React.FC = () => {
    const { id } = useParams();

    const { post, loading, error } = useSinglePost(id);

    if (loading) {
        return <Loader />;
    } else if (error.status) {
        return <Error name={error.name} message={error.message} />;
    }

    if (!post) {
        return null;
    }

    return (
        <Link to={`/posts/${id}`} className="Post-container">
            <Image data={post} />
            <div className="Title">{post.title}</div>
            <div className="Text">{post.text}</div>
            <div className="Date">{post.date}</div>
        </Link>
    );
};

export default PostId;
