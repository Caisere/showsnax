import Movie from "./Movie";

// MoviesLists for SearchMovieLists
function MoviesLists({ movies, onSelectMovie }) {
    return (
        <ul className="list list-movies">
            {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} /> 
            ))}
        </ul>
    );
}

export default MoviesLists