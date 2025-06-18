import React from 'react';

// The Main Component, containing the SearcherMovies and Watched Movies Components
function Main({children}) {
    return (
        <main className="main">
        {children}
        </main>
    );
}
export default Main
