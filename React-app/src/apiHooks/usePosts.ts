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

const URL = "https://studapi.teachmeskills.by/blog/posts/?";

const usePosts = (page: number, limit: number) => {
    const offset = limit * (page - 1);

    const url = `${URL}limit=${limit}&offset=${offset}`;
    //console.log(url);

    return usePostRequest<ResponseType>(defValue, url);
};

export default usePosts;
