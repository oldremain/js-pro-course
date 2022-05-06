import React, { useReducer } from "react";
import usePosts from "../../apiHooks/usePosts";
import useTranslate from "../hooks/useTranslate";
import useSelector from "../hooks/useSelector";
import PostsFilter from "./PostsFilter/PostsFilter";
import {
    initialState,
    PostsFilterReducer,
} from "./PostsFilter/PostsFilterReducer";
import PostsCard from "./Card/PostsCard";
import Error from "./Error/Error";
import Loader from "./Loader/Loader";

import "./Posts.scss";

type PropsType = {};

const PostsServer: React.FC<PropsType> = () => {
    const { t } = useTranslate();

    const [state, dispatch] = useReducer(PostsFilterReducer, initialState);

    const { data, loading, error, setError } = usePosts(state);

    return (
        <>
            <PostsFilter count={data.count} state={state} dispatch={dispatch} />

            {!loading && (
                <div className="Post-count">
                    {t("posts.countPerPage")}:
                    <span> {data.results.length}</span>
                </div>
            )}

            <div className="Posts-wrap">
                {loading && <Loader />}

                {data.results.map((post) => (
                    <PostsCard key={post.id} data={post} />
                ))}

                {error.status && (
                    <Error
                        isVisible={error.isVisible}
                        setError={setError}
                        name={error.name}
                        message={error.message}
                    />
                )}
            </div>
        </>
    );
};

export default PostsServer;
