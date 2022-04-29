import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import usePostById from "../../apiHooks/usePostById";
import Image from "../PostImage/Image";
import Loader from "../Posts/Loader/Loader";
import Error from "../Posts/Error/Error";
import Clicker from "../Clicker/Clicker";
import PostType from "../../types/PostType";
import ErrorType from "../../types/PostErrorType";

import "./PostById.scss";
import axios from "axios";
import useSelector from "../hooks/useSelector";
import useActions from "../hooks/useActions";

const URL = "https://studapi.teachmeskills.by/blog/posts/";

const PostById: React.FC = () => {
    const { id } = useParams();
    const url = `${URL}/${id}`;

    // const { data, loading, error, setError } = usePostById(id);

    // const [data, setData] = useState<PostType | undefined>();
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState<ErrorType>({
    //     status: false,
    //     name: "",
    //     message: "",
    //     isVisible: false,
    // });

    const data = useSelector((state) => state.post.data);
    const loading = useSelector((state) => state.post.loading);
    const error = useSelector((state) => state.post.error);

    const { setPost, setPostLoading, setPostError } = useActions();

    useEffect(() => {
        setPostLoading(true);
        setPost(undefined);
        axios
            .get(url)
            .then((response) => {
                //console.log(response.data);
                setPostError({
                    status: false,
                    name: "",
                    message: "",
                    isVisible: false,
                });
                setPost(response.data as PostType);
            })
            .catch((error) => {
                //console.log(error);
                setPostError({
                    status: true,
                    name: error.name,
                    message: error.message,
                    isVisible: true,
                });
            })
            .finally(() => setPostLoading(false));
    }, [url]);

    if (loading) {
        return <Loader />;
    } else if (error.status) {
        return (
            <Error
                setError={setPostError}
                isVisible={error.isVisible}
                name={error.name}
                message={error.message}
            />
        );
    }

    if (!data) {
        return null;
    }

    return (
        <>
            <Link to={`/posts/${id}`} className="Card-wrap Card-wrap__post-id">
                <Image data={data} />
                <div className="Title">{data.title}</div>
                <div className="Text">{data.text}</div>
                <div className="Date">{data.date}</div>
            </Link>
        </>
    );
};

export default PostById;
