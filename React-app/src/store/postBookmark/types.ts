export type PostBookmarks = {
    markedPosts: number[];
};

export enum PostMarkActionType {
    SET_MARK = "SET_MARK",
}

type SetPostMarked = {
    type: PostMarkActionType.SET_MARK;
    payload: number;
};

export type PostMarkedActionType = SetPostMarked;
