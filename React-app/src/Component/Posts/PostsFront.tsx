import React, { useReducer, useState } from "react";
import usePosts from "../../apiHooks/usePosts";
import usePostsByChoice from "./usePostsByChoice";
import {
    initialState,
    PostsFilterReducer,
} from "./PostsFilter/PostsFilterReducer";
import PostType from "../../types/PostType";
import { PostsChoice } from "../../enums/PostsChoice";

import Loader from "./Loader/Loader";
import PostsCard from "./Card/PostsCard";
import Error from "./Error/Error";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import "./Posts.scss";

type PropsType = {};

const PostsFront: React.FC<PropsType> = () => {
    const [state] = useReducer(PostsFilterReducer, initialState);
    const { data, loading, error, setError } = usePosts(state);

    const [alignment, setAlignment] = useState(PostsChoice.LIKED);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: PostsChoice
    ) => {
        setAlignment(newAlignment);
    };

    const filteredData: PostType[] = usePostsByChoice(alignment, data);

    return (
        <>
            <ToggleButtonGroup
                sx={{ mb: 3 }}
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value={PostsChoice.LIKED}>
                    <MoodIcon />
                </ToggleButton>
                <ToggleButton value={PostsChoice.DISLIKED}>
                    <SentimentVeryDissatisfiedIcon />
                </ToggleButton>
                <ToggleButton value={PostsChoice.MARKED}>
                    <BookmarkIcon />
                </ToggleButton>
            </ToggleButtonGroup>

            <div className="Posts-wrap">
                {loading && <Loader />}
                {filteredData?.map((post) => (
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

export default PostsFront;
