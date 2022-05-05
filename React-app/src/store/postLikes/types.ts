export type PostLikesType = {
    likes: number[];
    dislikes: number[];
};

export enum PostLikeActionTypes {
    SET_LIKE = "SET_LIKE",
    SET_DISLIKE = "SET_DISLIKE",
}

type SetLikeAction = {
    type: PostLikeActionTypes.SET_LIKE;
    payload: number;
};

type SetDislikeAction = {
    type: PostLikeActionTypes.SET_DISLIKE;
    payload: number;
};

export type PostLikeActionType = SetLikeAction | SetDislikeAction;
