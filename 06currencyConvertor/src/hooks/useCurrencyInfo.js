import {useEffect, useState} from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}) //here when we calling api we used empty object for default so when api call get failed system will not crash 
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);        
    }, [currency] //this is called dependency array so when there is any change in assigned variable or function it gets called
)
console.log(data);
return data
}
export default useCurrencyInfo;