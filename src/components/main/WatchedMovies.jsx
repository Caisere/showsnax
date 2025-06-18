// import { useState } from "react";
// import { tempWatchedData } from "../../App";
// import WatchedMoviesSummary from "./WatchedMoviesSummary";
// import WatchedMoviesLists from "./WatchedMoviesLists";
// import Button from "./Button";

// Watched Movies Components for Main

// function WatchedMovies({children}) {
  
//   const [isOpen2, setIsOpen2] = useState(true);
//   return (
//     <div className="box">
//       <Button
//         onClick={() => setIsOpen2((open) => !open)}
//         className={"btn-toggle"}
//       >
//         {isOpen2 ? "–" : "+"}
//       </Button>
//       <button
//               className="btn-toggle"
//               onClick={() => setIsOpen2((open) => !open)}
//             >
//               {isOpen2 ? "–" : "+"}
//             </button>
//       {isOpen2 && (
//         <>
//           {children}
//         </>
//       )}
//     </div>
//   );
// }

// export default WatchedMovies