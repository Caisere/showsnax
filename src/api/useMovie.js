import { useState, useEffect } from "react";


export const Key = "fb3a4882";
export const BASED_URL = "https://www.omdbapi.com";

// custom hook
export function useMovie(query) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [movies, setMovies] = useState([]);

    // fetching the movies from the API
    useEffect(() => {
        // for fetching clean up
        const controller = new AbortController();
        async function fetchMovies() {
            try {
                setIsLoading(true);
                setError(""); //!!!
                const res = await fetch(`${BASED_URL}/?apikey=${Key}&s=${query}`, {signal: controller.signal});
                if (!res.ok) {
                    throw new Error("Something went wrong while Fetching Movie!");
                }
                const data = await res.json();
                // console.log(data.Search)
                if (data.Response === "False") {
                    throw new Error("Movie not found!");
                }
                setMovies(data.Search);
            } catch (err) {
                // if statement to make sure that error message is not displayed on Abort!
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        }
        // if the query is less than 3 characters, set the movies to empty array and error to empty string
        if (query?.length < 3) {
            setMovies([]);
            setError("");
            return;
        }
        // call the fetchMovies function
        fetchMovies();

        //clean up function for the fetch method
        return function () {
            controller.abort();
        }
    }, [query]); // using the query as a dependency to fetch the movies when the query changes

    return {movies, isLoading, error}
}