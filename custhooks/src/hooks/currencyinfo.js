import {  useEffect,useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState(null);  // 🔹 Start with `null` instead of `{}`

    useEffect(() => {
        const controller = new AbortController();  // To prevent memory leaks
        const signal = controller.signal;

        fetch(`https://v6.exchangerate-api.com/v6/88914609f47b41ec8caf00d2/latest/${currency}`, { signal })
            .then((resp) => resp.json())  
            .then((resp) => {
                if (resp && resp.conversion_rates) {
                    setData(resp.conversion_rates);  // ✅ Store only `conversion_rates`
                } else {
                    console.error("Invalid API response:", resp);
                    setData({});
                }
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    console.error("Error fetching currency data:", err);
                    setData({});
                }
            });

        return () => controller.abort(); // Cleanup function to stop request on unmount
    }, [currency]);

    return data || {};  // 🔹 Always return an object to prevent `undefined` errors
}

export default useCurrencyInfo;