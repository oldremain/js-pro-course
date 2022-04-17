import React from "react";
import { Link, useParams } from "react-router-dom";
import usePost from "../hooks/usePost";
import Loader from "../Posts/Loader/Loader";
import Error from "../Posts/Error/Error";

import "./Post.scss";
import notFoundImage from "../../assets/img/notfound.png";

const Post: React.FC = () => {
    const { id } = useParams();

    const { post, loading, error, setError } = usePost(id);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = () => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         fetch(`${URL}${id}`)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 //const post = data as PostType;
    //                 setPost(data);
    //                 console.log(data);
    //             })
    //             .catch((error) => {
    //                 setError({
    //                     status: true,
    //                     name: error.name,
    //                     message: error.message,
    //                 });
    //             })
    //             .finally(() => setLoading(false));
    //     }, 1000);
    // };

    const handleError = () => {
        setError({
            status: true,
            name: error.name,
            message: error.message,
        });
    };

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
            <div className="Image">
                {!!post.image && !error.status ? (
                    <img src={post.image} onError={handleError} alt="card" />
                ) : (
                    <img src={notFoundImage} alt="notfound" />
                )}
            </div>
            <div className="Title">{post.title}</div>
            <div className="Text">{post.text}</div>
            <div className="Date">{post.date}</div>
        </Link>
    );
};

export default Post;
