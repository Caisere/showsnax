import React from "react";
import { useRef } from "react";
import { useKey } from "../../hooks/useKey";
// import { useState } from "react";

// Search Input for NavBar
function SearchInput({ query, setQuery, onCloseMovieDetail }) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) {
      return;
    }
    inputEl.current.focus();
    setQuery("");
    onCloseMovieDetail();
  });

  // useEffect(function () {
  //     function callback (e) {
  //         if(document.activeElement === inputEl.current) {
  //             return;
  //         }

  //         if(e.code === 'Enter') {
  //             inputEl.current.focus()
  //             setQuery('')
  //         }
  //     }

  //     document.addEventListener('keydown', callback)

  //     return () => document.addEventListener('keydown', callback)

  // })

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export default SearchInput;
