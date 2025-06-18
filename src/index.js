import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './textExpand.css'
import App from './App';
// import StarRating from './StarRating';
// import TextExpanded from './TextExpanded';

// function Test () {
//     const [movieRating, setMovieRating] = useState(0)

//     return (
//         <div>
//             <StarRating color='green' maxRating={7} onSetRating={setMovieRating}/>
//             <p>This movie was rated {movieRating} stars </p>
//         </div>
//     )
// }


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        {/* <StarRating maxRating={"5"} message={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']} />  
        <StarRating  color='blue' size={36} className='test' defaultRating={1}/>  */}
        {/* <Test />  */}
        <App />
        {/* <TextExpanded /> */}
    </React.StrictMode>
);
