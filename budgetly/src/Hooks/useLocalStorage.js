import React, { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        // STORAGE DATA
        const jsonValue = localStorage.getItem(key);
    
        // GET PREVIOUS DATA STORED IN LOCAL STORAGE
        if (jsonValue != null) return JSON.parse(jsonValue);

        // CHECK IF DEFAULT VALUE IS A FUNCTION OR VARIABLE RETURN BOTH
        if(typeof defaultValue === 'function') {
            return defaultValue();
        }
        else {
            return defaultValue;
        } 
    })

    useEffect(() => {
        // UPDATE STORAGE WHEN KEY OR VALUE CHANGES
       localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    // RETURN END STATE
    return [value, setValue];
}

export default useLocalStorage;