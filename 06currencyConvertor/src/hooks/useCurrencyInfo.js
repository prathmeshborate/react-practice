import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = 'c8549286dc5c6b9ddfb54a2faa8e052f'; // Replace with your actual API key
        const url = `http://data.fixer.io/api/latest?access_key=${apiKey}&symbols=${currency}`;

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((res) => setData(res.rates))
            .catch((error) => {
                setError(error);
                console.error('Error fetching data: ', error);
            });
    }, [currency]);

    console.log(data);
    return { data, error };
}

export default useCurrencyInfo;