import {
    PostsFilterAction,
    PostsFilterActionTypes,
    PostsFilterType,
    PostsOrder,
} from "./PostsFilterTypes";

export const initialState: PostsFilterType = {
    limit: 10,
    page: 1,
    ordering: PostsOrder.nothing,
};

export const PostsFilterReducer = (
    state: PostsFilterType,
    action: PostsFilterAction
): PostsFilterType => {
    switch (action.type) {
        case PostsFilterActionTypes.SET_PAGE_TYPE:
            return { ...state, page: action.payload };
        case PostsFilterActionTypes.SET_LIMIT_TYPE:
            return {
                ...state,
                page: 1,
                author: undefined,
                lesson_num: undefined,
                title: "",
                limit: action.payload,
            };
        case PostsFilterActionTypes.SET_ORDER_TYPE:
            return { ...state, page: 1, ordering: action.payload };
        case PostsFilterActionTypes.SET_AUTHOR_TYPE: {
            const numValue = +action.payload;

            if (isNaN(numValue)) {
                return state;
            }
            const author = numValue > 0 ? numValue : undefined;
            return { ...state, author };
        }
        case PostsFilterActionTypes.SET_LESSON_TYPE: {
            const numValue = +action.payload;

            if (isNaN(numValue)) {
                return state;
            }
            const lesson_num = numValue > 0 ? numValue : undefined;

            return { ...state, lesson_num };
        }
        case PostsFilterActionTypes.SET_TITLE_TYPE: {
            return { ...state, title: action.payload };
        }
        default:
            return state;
    }
};
