import React from "react";
import {
    Pagination,
    MenuItem,
    InputLabel,
    Select,
    SelectChangeEvent,
    FormControl,
    TextField,
} from "@mui/material";

import "../Posts.scss";
import PostsFilterType from "./PostsFilterType";

type PropsType = {
    count: number;
    filter: PostsFilterType;
    setFilter: (callback: (v: PostsFilterType) => PostsFilterType) => void;
};

const PostsFilter: React.FC<PropsType> = ({ count, filter, setFilter }) => {
    const paginationHandler = (
        e: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setFilter((prevValue: PostsFilterType) => ({
            ...prevValue,
            page: value,
        }));
    };

    const limitHandler = (e: SelectChangeEvent) => {
        setFilter((prevValue: PostsFilterType) => ({
            ...prevValue,
            page: 1,
            limit: +e.target.value,
        }));
    };

    const authorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter((prevValue) => {
            if (Number.isNaN(+e.target.value)) {
                return { ...prevValue };
            } else {
                return { ...prevValue, author: +e.target.value };
            }
        }); //проверка, что не число
    };

    const lessonHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter((prevValue) => {
            if (Number.isNaN(+e.target.value)) {
                return { ...prevValue };
            } else {
                return { ...prevValue, lesson_num: +e.target.value };
            }
        }); //проверка, что не число
    };

    return (
        <div className="Posts-controls">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="posts-limit">Limit</InputLabel>
                <Select
                    labelId="posts-limit"
                    value={filter.limit.toString()}
                    label="Limit"
                    onChange={limitHandler}
                >
                    {/* <MenuItem value="">
                        <em>None</em>
                    </MenuItem> */}
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <TextField
                label="Author"
                size="small"
                value={filter.author}
                onChange={authorHandler}
            />

            <TextField
                label="Lesson"
                size="small"
                value={filter.lesson_num}
                onChange={lessonHandler}
            />

            <Pagination
                className="Posts-pagination"
                page={filter.page}
                count={Math.ceil(count / filter.limit)}
                onChange={paginationHandler}
                color="primary"
            />
        </div>
    );
};

export default PostsFilter;

// if (Number.isNaN(e.target.value)) {
//     return ({
//          ...prevValue,
//      }) else {
//          return ({
//              ...prevValue,
//              author: +e.target.value,
//          } )

//      }
//  }
//  })
