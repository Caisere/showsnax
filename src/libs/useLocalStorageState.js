import { useState, useEffect } from "react";


export function useLocalStorageState(initialValue, key) {
    const [value, setValue] = useState(function () {
        const storedWatchedMovies = localStorage.getItem(key);
        return storedWatchedMovies ? JSON.parse(storedWatchedMovies) : initialValue;
    });

    console.log(value)

    // function that manages the local storage
    useEffect(function (){
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key])

    return [value, setValue]
}