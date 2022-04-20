import PostType from "../types/PostType";
import usePostRequest from "./usePostRequest";

export type ErrorType = {
    status: boolean;
    name: string;
    message: string;
};

type ResponseType = {
    count: number;
    next?: string;
    previous?: string;
    results: PostType[];
};

const defValue: ResponseType = {
    count: 0,
    results: [],
};

const URL = "https://studapi.teachmeskills.by/blog/posts/?limit=40&offset=0";

const usePosts = () => usePostRequest<ResponseType>(defValue, URL);

export default usePosts;
