import { useState, useEffect } from "react";

export type ErrorType = {
    status: boolean;
    name: string;
    message: string;
};

const usePostRequest = <T>(defValue: T, url: string) => {
    const [data, setData] = useState<T>(defValue);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<ErrorType>({
        status: false,
        name: "",
        message: "",
    });

    useEffect(() => {
        fetchData();
    }, [url]);

    const fetchData = () => {
        setLoading(true);
        setData(defValue);
        fetch(url)
            .then((response) => {
                if (response.status >= 400) {
                    return defValue;
                } else {
                    return response.json();
                } //проверка статуса в случае ответа с сервера ошибкой - 404, чтобы не сломалось приложение
            })
            .then((data) => {
                setData(data);
                console.log(data);
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

    return { data, loading, error };
};

export default usePostRequest;
