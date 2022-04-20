import React, { useEffect, useState } from "react";
import {
    Pagination,
    MenuItem,
    Select,
    SelectChangeEvent,
    FormControl,
} from "@mui/material";
import usePosts from "../../apiHooks/usePosts";

import "./Posts.scss";

type PropsType = {
    count: number;
};

const PostsFilter: React.FC<PropsType> = ({ count }) => {
    const paginationHandler = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value);
    };

    const selectHandler = (e: SelectChangeEvent) => {
        setPage(1);
        setLimit(+e.target.value);
    };

    return (
        <div className="mu-controls">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select
                    value={limit.toString()}
                    label="Items per page"
                    onChange={selectHandler}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <Pagination
                className="Posts-pagination"
                page={page}
                count={Math.ceil(count / limit)}
                onChange={paginationHandler}
                color="primary"
            />
        </div>
    );
};

export default PostsFilter;
