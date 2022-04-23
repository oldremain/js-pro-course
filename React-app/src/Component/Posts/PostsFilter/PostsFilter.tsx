import React from "react";
import useTranslate from "../../hooks/useTranslate";
import {
    Pagination,
    MenuItem,
    InputLabel,
    Select,
    SelectChangeEvent,
    FormControl,
    // TextField,
} from "@mui/material";
import { PostsFilterType, PostsOrder } from "./PostsFilterType";
import TextField from "../../UI/TextField/TextField";

import "../Posts.scss";

type PropsType = {
    count: number;
    filter: PostsFilterType;
    setFilter: (callback: (v: PostsFilterType) => PostsFilterType) => void;
};

const PostsFilter: React.FC<PropsType> = ({ count, filter, setFilter }) => {
    const { t } = useTranslate();

    const handleChangePage = (e: React.ChangeEvent<unknown>, value: number) => {
        setFilter((prevValue: PostsFilterType) => ({
            ...prevValue,
            page: value,
        }));
    };

    const handleChangeLimit = (e: SelectChangeEvent) => {
        setFilter((prevValue: PostsFilterType) => ({
            ...prevValue,
            page: 1,
            limit: +e.target.value,
        }));
    };

    const setAuthor = (value: string) => {
        if (Number.isNaN(+value)) {
            return;
        }

        const author = +value > 0 ? +value : undefined;

        setFilter((prevValue) => ({
            ...prevValue,
            author,
        }));
    };

    const setLesson = (value: string) => {
        if (Number.isNaN(+value)) {
            return;
        }

        const lesson_num = +value > 0 ? +value : undefined;

        setFilter((prevValue) => ({
            ...prevValue,
            lesson_num,
        }));
    };

    const handleChangeOrder = (e: SelectChangeEvent) => {
        setFilter((prevValue: PostsFilterType) => ({
            ...prevValue,
            page: 1,
            ordering: e.target.value as PostsOrder,
        }));
    };

    return (
        <div className="Posts-controls">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="posts-limit">{t("filter.limit")}</InputLabel>
                <Select
                    labelId="posts-limit"
                    value={filter.limit.toString()}
                    label="Limit"
                    onChange={handleChangeLimit}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
            </FormControl>

            <TextField
                value={filter.author?.toString()}
                setValue={setAuthor}
                placeholder="Author"
            />

            <TextField
                value={filter.lesson_num?.toString()}
                setValue={setLesson}
                placeholder="Lesson"
            />

            <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
                <InputLabel id="posts-ordering">
                    {t("filter.ordering")}
                </InputLabel>
                <Select
                    labelId="posts-ordering"
                    value={filter.ordering}
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
                page={filter.page}
                count={Math.ceil(count / filter.limit)}
                onChange={handleChangePage}
                color="primary"
            />
        </div>
    );
};

export default PostsFilter;

{
    /* <TextField
                label={t("filter.author")}
                size="small"
                value={filter.author}
                onChange={authorHandler}
            />

            <TextField
                label={t("filter.lesson")}
                size="small"
                value={filter.lesson_num}
                onChange={lessonHandler}
            /> */
}

// const authorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFilter((prevValue) => {
//         if (Number.isNaN(+e.target.value)) {
//             return { ...prevValue };
//         } else {
//             return { ...prevValue, author: +e.target.value };
//         }
//     }); //проверка, что не число
// };

// const lessonHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFilter((prevValue) => {
//         if (Number.isNaN(+e.target.value)) {
//             return { ...prevValue };
//         } else {
//             return { ...prevValue, lesson_num: +e.target.value };
//         }
//     }); //проверка, что не число
// };
