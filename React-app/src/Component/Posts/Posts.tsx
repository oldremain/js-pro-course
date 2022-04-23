import React, { useState } from "react";
import usePosts from "../../apiHooks/usePosts";
import useTranslate from "../hooks/useTranslate";
import PostsFilter from "./PostsFilter/PostsFilter";
import { PostsFilterType } from "./PostsFilter/PostsFilterType";
import PostsCard from "./Card/PostsCard";
import Error from "./Error/Error";
import Loader from "./Loader/Loader";

import "./Posts.scss";

type PropsType = {};

const Posts: React.FC<PropsType> = () => {
    const { t } = useTranslate();
    const [filter, setFilter] = useState<PostsFilterType>({
        limit: 10,
        page: 1,
        ordering: "",
    });

    const { data, loading, error, setError } = usePosts(filter);

    return (
        <section className="Posts">
            <PostsFilter
                count={data.count}
                filter={filter}
                setFilter={setFilter}
            />

            {!loading && (
                <div className="Post-count">
                    {t("posts.countPerPage")}:
                    <span> {data.results.length}</span>
                </div>
            )}

            <div className="Posts-wrap">
                {data.results.map((post) => (
                    <PostsCard key={post.id} data={post} />
                ))}

                {loading && <Loader />}
                {error.status && (
                    <Error
                        isVisible={error.isVisible}
                        setError={setError}
                        name={error.name}
                        message={error.message}
                    />
                )}
            </div>
        </section>
    );
};

export default Posts;
