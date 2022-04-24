import {
    PostsFilterAction,
    PostsFilterActionTypes,
    PostsOrder,
} from "./PostsFilterTypes";

export const setPage = (value: number): PostsFilterAction => ({
    type: PostsFilterActionTypes.SET_PAGE_TYPE,
    payload: value,
});

export const setLimit = (value: number): PostsFilterAction => ({
    type: PostsFilterActionTypes.SET_LIMIT_TYPE,
    payload: value,
});

export const setOrder = (value: PostsOrder): PostsFilterAction => ({
    type: PostsFilterActionTypes.SET_ORDER_TYPE,
    payload: value,
});

export const setAuthor = (value: string): PostsFilterAction => {
    return {
        type: PostsFilterActionTypes.SET_AUTHOR_TYPE,
        payload: value,
    };
};

export const setLesson = (value: string): PostsFilterAction => {
    return {
        type: PostsFilterActionTypes.SET_LESSON_TYPE,
        payload: value,
    };
};

export const setTitle = (value: string): PostsFilterAction => {
    return {
        type: PostsFilterActionTypes.SET_TITLE_TYPE,
        payload: value,
    };
};
