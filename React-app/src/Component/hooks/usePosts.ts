import { useState, useEffect, useContext } from 'react';
import PostsContext from '../../contexts/PostsContext';
import PostType from '../../types/PostType';

type Error = {
    status: boolean;
    name: string;
    message: string;
};

const URL = 'https://studapi.teachmeskills.by/blog/posts/?limit=15&offset=0';

const usePosts = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error>({
        status: false,
        name: '',
        message: '',
    });

    const { postCount, setCount } = useContext(PostsContext);

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
