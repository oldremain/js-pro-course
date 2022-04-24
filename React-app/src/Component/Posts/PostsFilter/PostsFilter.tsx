import React from "react";
import useTranslate from "../../hooks/useTranslate";
import {
    Pagination,
    MenuItem,
    InputLabel,
    Select,
    SelectChangeEvent,
    FormControl,
} from "@mui/material";
import TextField from "../../UI/TextField/TextField";
import {
    PostsFilterAction,
    PostsFilterType,
    PostsOrder,
} from "./PostsFilterTypes";
import {
    setAuthor,
    setLesson,
    setLimit,
    setOrder,
    setPage,
    setTitle,
} from "./PostsFilterActionCreators";

import "../Posts.scss";

type PropsType = {
    count: number;
    state: PostsFilterType;
    dispatch: (value: PostsFilterAction) => void;
};

const PostsFilter: React.FC<PropsType> = ({ count, state, dispatch }) => {
    const { t } = useTranslate();

    const handleChangePage = (e: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
    };

    const handleChangeLimit = (e: SelectChangeEvent) => {
        dispatch(setLimit(+e.target.value));
    };

    const updateAuthor = (value: string) => {
        dispatch(setAuthor(value));
    };

    const updateLesson = (value: string) => {
        dispatch(setLesson(value));
    };

    const updateTitle = (value: string) => {
        dispatch(setTitle(value));
    };

    const handleChangeOrder = (e: SelectChangeEvent) => {
        dispatch(setOrder(e.target.value as PostsOrder));
    };

    return (
        <div className="Posts-controls">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="posts-limit">{t("filter.limit")}</InputLabel>
                <Select
                    labelId="posts-limit"
                    value={state.limit.toString()}
                    label="Limit"
                    onChange={handleChangeLimit}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
            </FormControl>

            <TextField
                value={state.author?.toString()}
                setValue={updateAuthor}
                placeholder="Author"
            />

            <TextField
                value={state.lesson_num?.toString()}
                setValue={updateLesson}
                placeholder="Lesson"
            />

            <TextField
                value={state.title?.toString()}
                setValue={updateTitle}
                placeholder="Title"
            />

            <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
                <InputLabel id="posts-ordering">
                    {t("filter.ordering")}
                </InputLabel>
                <Select
                    labelId="posts-ordering"
                    value={state.ordering}
                    label="Ordering"
                    onChange={handleChangeOrder}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={PostsOrder.authorAsc}>
                        ↑ {t("filter.ordering.author")}
                    </MenuItem>
                    <MenuItem value={PostsOrder.authorDesc}>
                        ↓ {t("filter.ordering.author")}
                    </MenuItem>
                    <MenuItem value={PostsOrder.lessonAsc}>
                        ↑ {t("filter.ordering.lesson")}
                    </MenuItem>
                    <MenuItem value={PostsOrder.lessonDesc}>
                        ↓ {t("filter.ordering.lesson")}
                    </MenuItem>
                </Select>
            </FormControl>

            <Pagination
                className="Posts-pagination"
                page={state.page}
                count={Math.ceil(count / state.limit)}
                onChange={handleChangePage}
                color="primary"
            />
        </div>
    );
};

export default PostsFilter;
