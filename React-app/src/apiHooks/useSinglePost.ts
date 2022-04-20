import { useState, useEffect } from "react";
import PostType from "../types/PostType";
import { ErrorType } from "./usePosts";

const URL = "https://studapi.teachmeskills.by/blog/posts/";

const useSinglePost = (id: string = "") => {
    const [post, setPost] = useState<PostType>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<ErrorType>({
        status: false,
        name: "",
        message: "",
    });

    useEffect(() => {
        fetchData(id);
    }, []);

    const fetchData = (postId: string) => {
        setLoading(true);
        setTimeout(() => {
            fetch(`${URL}${postId}`)
                .then((response) => response.json())
                .then((data) => {
                    setPost(data);
                    //console.log(data);
                })
                .catch((error) => {
                    setError({
                        status: true,
                        name: error.name,
                        message: error.message,
                    });
                })
                .finally(() => setLoading(false));
        }, 1000);
    };

    return { post, loading, error, setError };
};

export default useSinglePost;
