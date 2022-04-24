import axios from "axios";
import { useState, useEffect } from "react";

export type ErrorType = {
    status: boolean;
    name: string;
    message: string;
    isVisible: boolean;
};

const usePostRequest = <T>(defValue: T, url: string) => {
    const [data, setData] = useState<T>(defValue);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<ErrorType>({
        status: false,
        name: "",
        message: "",
        isVisible: false,
    });

    useEffect(() => {
        fetchData();
    }, [url]);

    const fetchData = () => {
        setLoading(true);
        setData(defValue);
        axios
            .get(url)
            .then((response) => {
                // console.log(response.data);
                setError({
                    status: false,
                    name: "",
                    message: "",
                    isVisible: false,
                });
                setData(response.data as T);
            })
            .catch((error) => {
                // console.log(error);
                setError({
                    status: true,
                    name: error.name,
                    message: error.message,
                    isVisible: true,
                });
            })
            .finally(() => setLoading(false));
    };
    return { data, loading, error, setError };
};

export default usePostRequest;
