import React from "react";
import NavBar from "./components/navbar/NavBar";
import Main from "./components/main/Main";
import { useState } from "react";
import Logo from "./components/navbar/Logo";
import SearchInput from "./components/navbar/SearchInput";
import NumResult from "./components/navbar/NumResult";
import MoviesLists from "./components/main/MoviesLists";
import Box from "./components/main/Box";
import WatchedMoviesSummary from "./components/main/WatchedMoviesSummary";
import WatchedMoviesLists from "./components/main/WatchedMoviesLists";
import ErrorMessage from "./components/main/ErrorMessage";
import Loader from "./components/main/Loader";
import MovieDetails from "./components/main/MovieDetails";
import { useMovie } from "./api/useMovie";
import { useLocalStorageState } from "./libs/useLocalStorageState";

export const Key = "fb3a4882";

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// App Component which is being rendered on the user Interface
function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovie(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  // function to handle the selected movie
  function handleSelectedMovies(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }
  // function to close the movie detail
  function handleCloseMovieDetail() {
    setSelectedId(null);
  }
  // function to add a movie to the watched list
  function handleWatchedMovies(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  // function to delete a movie from the watched list
  function handleDeleteWatchedMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Logo />
        <SearchInput
          query={query}
          setQuery={setQuery}
          onCloseMovieDetail={handleCloseMovieDetail}
        />
        <NumResult movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MoviesLists movies={movies} onSelectMovie={handleSelectedMovies} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovieDetail={handleCloseMovieDetail}
              onAddWatched={handleWatchedMovies}
              watched={watched}
            />
          ) : (
            <>
              <WatchedMoviesSummary watched={watched} />
              <WatchedMoviesLists
                watched={watched}
                onDeleteWatchedMovie={handleDeleteWatchedMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;

// export const tempWatchedData = [
//     {
//       imdbID: "tt1375666",
//       Title: "Inception",
//       Year: "2010",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//       runtime: 148,
//       imdbRating: 8.8,
//       userRating: 10,
//     },
//     {
//       imdbID: "tt0088763",
//       Title: "Back to the Future",
//       Year: "1985",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//       runtime: 116,
//       imdbRating: 8.5,
//       userRating: 9,
//     },
//   ];

//  <Box element={<MoviesLists movies={movies} />} />
//                         <Box
//                             element={
//                                 <>
//                                 <WatchedMoviesSummary watched={watched} />
//                                 <WatchedMoviesLists watched={watched} />
//                                 </>
//                             }
//                         />
