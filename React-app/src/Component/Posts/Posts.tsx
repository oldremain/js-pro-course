import React from 'react';
import PostsCard from './Card/PostsCard';
import Error from './Error/Error';
import Loader from './Loader/Loader';

import './Posts.scss';
import usePosts from '../hooks/usePosts';

type PropsType = {};

const Posts: React.FC<PropsType> = () => {
    const { posts, loading, error, postCount } = usePosts();

    return (
        <section className="Posts">
            <div className="Posts-wrap">
                {posts.map((post) => (
                    <PostsCard key={post.id} data={post} />
                ))}
                {loading && <Loader />}
                {error.status && (
                    <Error name={error.name} message={error.message} />
                )}
            </div>
            <div className="Post-count">
                Total number of posts: <span>{postCount}</span>
            </div>
        </section>
    );
};

export default Posts;
