import React from "react";
import {
    Pagination,
    MenuItem,
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
        setFilter((prevValue) => ({
            ...prevValue,
            author: +e.target.value,
        }));
    };

    return (
        <div className="Posts-controls">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select
                    value={filter.limit.toString()}
                    label="Items per page"
                    onChange={limitHandler}
                >
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
