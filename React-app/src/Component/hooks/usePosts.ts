import { useState, useEffect } from "react";
import PostType from "../../types/PostType";

type Error = {
    status: boolean;
    name: string;
    message: string;
};

const URL = "https://studapi.teachmeskills.by/blog/posts/?limit=15&offset=0";

const usePosts = () => {
    const [postCount, setCount] = useState(0);
    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error>({
        status: false,
        name: "",
        message: "",
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data.results);
                setCount(data.results.length);
            })
            .catch((error) => {
                setError({
                    status: true,
                    name: error.name,
                    message: error.message,
                });
            })
            .finally(() => setLoading(false));
    };

    return { posts, loading, error, postCount };
};

export default usePosts;
