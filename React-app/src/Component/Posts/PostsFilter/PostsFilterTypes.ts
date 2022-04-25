export type PostsFilterType = {
    limit: number;
    page: number;
    author?: number;
    lesson_num?: number;
    title?: string;
    ordering: PostsOrder;
};

export enum PostsOrder {
    nothing = "",
    authorAsc = "author",
    authorDesc = "-author",
    lessonAsc = "lesson_num",
    lessonDesc = "-lesson_num",
}

export enum PostsFilterActionTypes {
    SET_PAGE_TYPE = "SET_PAGE_TYPE",
    SET_LIMIT_TYPE = "SET_LIMIT_TYPE",
    SET_ORDER_TYPE = "SET_ORDER_TYPE",
    SET_AUTHOR_TYPE = "SET_AUTHOR_TYPE",
    SET_LESSON_TYPE = "SET_LESSON_TYPE",
    SET_TITLE_TYPE = "SET_TITLE_TYPE",
}

export type PostsFilterAction =
    | SetPageAction
    | SetLimitAction
    | SetOrderAction
    | SetAuthorAction
    | SetLessonAction
    | SetTitleAction;

type SetPageAction = {
    type: PostsFilterActionTypes.SET_PAGE_TYPE;
    payload: number;
};

type SetLimitAction = {
    type: PostsFilterActionTypes.SET_LIMIT_TYPE;
    payload: number;
};

type SetOrderAction = {
    type: PostsFilterActionTypes.SET_ORDER_TYPE;
    payload: PostsOrder;
};

type SetAuthorAction = {
    type: PostsFilterActionTypes.SET_AUTHOR_TYPE;
    payload: string;
};

type SetLessonAction = {
    type: PostsFilterActionTypes.SET_LESSON_TYPE;
    payload: string;
};

type SetTitleAction = {
    type: PostsFilterActionTypes.SET_TITLE_TYPE;
    payload: string;
};
