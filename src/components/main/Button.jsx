import React from "react";

// Button for SearchMoviesList and WatchedMovies
function Button({ onClick, children, className }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button
