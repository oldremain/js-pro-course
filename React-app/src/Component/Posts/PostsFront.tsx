import React, { useCallback, useReducer, useState } from "react";
import usePosts from "../../apiHooks/usePosts";
import usePostsByChoice from "./usePostsByChoice";
import useTranslate from "../hooks/useTranslate";
import { PostsFilterReducer } from "./PostsFilter/PostsFilterReducer";
import {
    setAuthor,
    setLesson,
    setTitle,
} from "./PostsFilter/PostsFilterActionCreators";
import PostType from "../../types/PostType";
import { PostsFilterType, PostsOrder } from "./PostsFilter/PostsFilterTypes";
import { PostsChoice } from "../../enums/PostsChoice";

import Loader from "./Loader/Loader";
import PostsCard from "./Card/PostsCard";
import Error from "./Error/Error";
import { Pagination, ToggleButton, ToggleButtonGroup } from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TextField from "../UI/TextField/TextField";

import "./Posts.scss";

const initialState: PostsFilterType = {
    limit: 100,
    page: 1,
    ordering: PostsOrder.nothing,
};

const PAGE_SIZE: number = 4;

type PropsType = {};

const PostsFront: React.FC<PropsType> = () => {
    const { t } = useTranslate();

    const [page, setPage] = useState(1);
    const handleChangePage = useCallback(
        (_: React.ChangeEvent<unknown>, value: number) => {
            setPage(value);
        },
        []
    );

    const [state, dispatch] = useReducer(PostsFilterReducer, initialState);
    const { data, loading, error, setError } = usePosts(state);

    const updateTitle = useCallback(
        (value: string) => dispatch(setTitle(value)),
        []
    );
    const updateAuthor = useCallback(
        (value: string) => dispatch(setAuthor(value)),
        []
    );
    const updateLesson = useCallback(
        (value: string) => dispatch(setLesson(value)),
        []
    );

    const [mode, setMode] = useState(PostsChoice.LIKED);
    const handleToggleMode = (
        _: React.MouseEvent<HTMLElement>,
        newMode: PostsChoice
    ) => {
        setMode(newMode);
    };

    const filteredData: PostType[] = usePostsByChoice(mode, data);
    const filteredSlicedData: PostType[] = filteredData.slice(
        PAGE_SIZE * (page - 1),
        PAGE_SIZE * page
    );

    return (
        <>
            <div className="Posts-controls">
                <TextField
                    value={state.title?.toString()}
                    setValue={updateTitle}
                    placeholder={t("filter.title")}
                />
                <TextField
                    value={state.author?.toString()}
                    setValue={updateAuthor}
                    placeholder={t("filter.author")}
                />

                <TextField
                    value={state.lesson_num?.toString()}
                    setValue={updateLesson}
                    placeholder={t("filter.lesson")}
                />
                <Pagination
                    className="Posts-pagination"
                    page={page}
                    count={Math.ceil(filteredData.length / PAGE_SIZE)}
                    onChange={handleChangePage}
                    color="primary"
                />
            </div>
            <ToggleButtonGroup
                sx={{ mb: 3 }}
                color="primary"
                value={mode}
                exclusive
                onChange={handleToggleMode}
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
                {filteredSlicedData.map((post) => (
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
