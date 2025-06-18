import React from "react";
import { average } from "../../App";


// Watched Movies Summary
function WatchedMoviesSummary({ watched }) {
    const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
    const avgUserRating = average(watched.map((movie) => movie.userRating));
    const avgRuntime = average(watched.map((movie) => movie.runtime));
    return (
        <div className="summary ">
            <h2>Movies you watched</h2>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{flex: 1}}>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avgImdbRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{avgUserRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{avgRuntime.toFixed(2)}`</span>
                </p>
            </div>
        </div>
    );
}


export default WatchedMoviesSummary