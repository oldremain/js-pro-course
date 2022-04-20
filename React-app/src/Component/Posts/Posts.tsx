import React from "react";
import usePosts from "../../apiHooks/usePosts";
import PostsCard from "./Card/PostsCard";
import Error from "./Error/Error";
import Loader from "./Loader/Loader";

import "./Posts.scss";

type PropsType = {};

const Posts: React.FC<PropsType> = () => {
    const { data, loading, error, postCount } = usePosts();

    return (
        <section className="Posts">
            <div className="Posts-wrap">
                {data.results.map((post) => (
                    <PostsCard key={post.id} data={post} />
                ))}
                {loading && <Loader />}
                {error.status && (
                    <Error name={error.name} message={error.message} />
                )}
            </div>
            {!loading && (
                <div className="Post-count">
                    Total number of posts: <span>{postCount}</span>
                </div>
            )}
        </section>
    );
};

export default Posts;
