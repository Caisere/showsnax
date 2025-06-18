import React from "react";
import WatchedMoviesListing from "./WatchedMoviesListing";

// Watched Movies Lists
function WatchedMoviesLists({ watched, onDeleteWatchedMovie }) {
    return (
        <ul className="list list-movies">
            {watched.map((watchedMovie) => (
                <WatchedMoviesListing watchedMovie={watchedMovie} key={watchedMovie.imdbID} onDeleteWatchedMovie={onDeleteWatchedMovie} />
            ))}
        </ul>
    );
}

export default WatchedMoviesLists;