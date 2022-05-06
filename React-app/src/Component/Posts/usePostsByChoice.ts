import { PostsChoice } from "./../../types/PostsChoice";
import useSelector from "../hooks/useSelector";
import { ResponseType } from "../../apiHooks/usePosts";

const usePostsByChoice = (choice: string, data: ResponseType) => {
    const { likes, dislikes } = useSelector((state) => state.postLikes); // likes[], dislikes[]
    const { markedPosts } = useSelector((state) => state.postMarks);

    switch (choice) {
        case PostsChoice.LIKED: {
            return data.results.filter((item: any) => likes.includes(item.id));
        }
        case PostsChoice.DISLIKED: {
            return data.results.filter((item: any) =>
                dislikes.includes(item.id)
            );
        }
        case PostsChoice.MARKED: {
            return data.results.filter((item: any) =>
                markedPosts.includes(item.id)
            );
        }
    }
};

export default usePostsByChoice;
