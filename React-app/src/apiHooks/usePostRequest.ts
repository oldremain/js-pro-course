import { useState, useEffect } from "react";

export type ErrorType = {
    status: boolean;
    name: string;
    message: string;
};

const usePostRequest = <T>(defValue: T, url: string) => {
    const [postCount, setCount] = useState(0);
    const [data, setData] = useState<T>(defValue);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<ErrorType>({
        status: false,
        name: "",
        message: "",
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setCount(data?.results?.length);
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

    return { data, loading, error, postCount };
};

export default usePostRequest;
