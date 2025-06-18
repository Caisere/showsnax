import React from "react";

// Watched Movies Listing (Each Movies)
function WatchedMoviesListing({ watchedMovie, onDeleteWatchedMovie }) {
    // console.log(watchedMovie.imdbID) // Uncommented for debugging purposes

    function handleDeteleWatchedMovie() {
        onDeleteWatchedMovie(watchedMovie.imdbID);
    }

    return (
        <li >
            <img src={watchedMovie.poster} alt={`${watchedMovie.title} poster`} />
            <h3>{watchedMovie.title}</h3>
            <div>
                <p><span>🌟</span><span>{watchedMovie.imdbRating?.toFixed(2)}</span></p>
                <p><span>⭐️</span><span>{watchedMovie.userRating?.toFixed(2)}</span></p>
                <p><span>⏳</span><span>{watchedMovie.runtime} min</span></p>

                <button className="btn-delete" onClick={handleDeteleWatchedMovie}>x</button>
            </div>
        </li>
    );
}

export default WatchedMoviesListing
