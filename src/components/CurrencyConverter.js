import React,{useEffect,useState} from 'react';

const CurrencyConverter=()=>{
    const [rate,setRate]=useState(null);

    useEffect(()=>{
        fetch('https://v6.exchangerate-api.com/v6/f1804f235fe6940785dff75d/latest/USD')
        .then(res=>res.json())
        .then(data=>setRate(data.conversion_rates.INR));

    },[]);

    return(
        <div>
            <h2>1 USD={rate}</h2>
        </div>
    );
};

export default CurrencyConverter;