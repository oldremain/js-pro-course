import React from "react";
import { Link, useParams } from "react-router-dom";
import usePostById from "../../apiHooks/usePostById";
import Image from "../PostImage/Image";
import Loader from "../Posts/Loader/Loader";
import Error from "../Posts/Error/Error";

import "./PostById.scss";

const PostById: React.FC = () => {
    const { id } = useParams();

    const { data, loading, error } = usePostById(id);

    if (loading) {
        return <Loader />;
    } else if (error.status) {
        return <Error name={error.name} message={error.message} />;
    }

    if (!data) {
        return null;
    }

    return (
        <Link to={`/posts/${id}`} className="Post-container">
            <Image data={data} />
            <div className="Title">{data.title}</div>
            <div className="Text">{data.text}</div>
            <div className="Date">{data.date}</div>
        </Link>
    );
};

export default PostById;
