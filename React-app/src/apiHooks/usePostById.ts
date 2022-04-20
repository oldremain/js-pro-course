import PostType from "../types/PostType";
import usePostRequest from "./usePostRequest";

const URL = "https://studapi.teachmeskills.by/blog/posts/";

const usePostById = (id: string | undefined) =>
    usePostRequest<PostType | undefined>(undefined, `${URL}/${id}`);

export default usePostById;
