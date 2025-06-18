import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Key } from "../../App";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import StarRating from "./StarRating";
import { useKey } from "../../hooks/useKey";
import { BASED_URL } from "../../api/useMovie";

function MovieDetails({
  selectedId,
  onCloseMovieDetail,
  onAddWatched,
  watched,
}) {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  // check if the movie is already rated
  const isRated = watched
    .map((watchedMovie) => watchedMovie.imdbID)
    .includes(selectedId);

  // get user rating
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating]
  );

  // Destructuring the movieDetails object
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    Type: type,
    Writer: writer,
    Language: language,
  } = movieDetails;

  // function to add watched movies
  function handleAddWatchedMovies() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countUserRatingDecision: countRef.current,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovieDetail();
  }

  useKey("Enter", onCloseMovieDetail);

  // useEffect(() => {
  //     function callBack (e) {
  //         if (e.code === 'Escape') {
  //             onCloseMovieDetail();
  //             console.log('CLOSED')
  //         }
  //     }
  //     document.addEventListener('keydown', callBack);
  //     // clean up function
  //     return function () {
  //         document.removeEventListener('keydown', callBack);
  //     }
  // }, [onCloseMovieDetail])

  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `${BASED_URL}/?apikey=${Key}&i=${selectedId}`
          );
          if (!res.ok) {
            throw new Error(
              "Something went wrong while loading movie details! Check your internet connection."
            );
          }
          const data = await res.json();
          // console.log(data.status)
          setMovieDetails(data);
          // console.log(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      getMovieDetails();
    },
    [selectedId]
  );

  // effect to change the page title to the title of the movie when the movie is been clicked on.
  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;

    // clean up function for the effect
    return () => {
      document.title = "ShowSnax";
    };
  }, [title]);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <>
          <div className="details">
            <button className="btn-back" onClick={onCloseMovieDetail}>
              &larr;
            </button>
            <header className="details-header">
              <img src={poster} alt={`poster of ${title} movie`} />
              <div className="details-overview">
                <h2>{title}</h2>
                <p>
                  {released} &bull; {runtime}
                </p>
                <p>{genre}</p>
                <p>
                  <span>⭐️</span> {imdbRating} IMDb rating
                </p>
              </div>
            </header>
            <section>
              <div className="rating">
                {!isRated ? (
                  <>
                    <StarRating
                      maxRating={10}
                      size={24}
                      color="#ffc107"
                      onSetRating={setUserRating}
                    />
                    {userRating > 0 && (
                      <button
                        onClick={handleAddWatchedMovies}
                        className="btn-add"
                      >
                        + Add to Watched List
                      </button>
                    )}
                  </>
                ) : (
                  <p>
                    You have already rated this movie {watchedUserRating}{" "}
                    <span>⭐️</span>{" "}
                  </p>
                )}
              </div>
              <p>
                <em>{plot}</em>
              </p>
              <p>Starring {actors}</p>
              <p>Directed by {director}</p>
              <p>Written by {writer}</p>
              <p>Language: {language}</p>
              <p>Type: {type}</p>
              <p>Year: {year}</p>
            </section>
          </div>
        </>
      )}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

export default MovieDetails;
