import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
       <div>
           <div className= "popular--card">
               <Link key={el.id} to={`/movie/movie_details/${el.id}`}>
                   <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="img"/>
               </Link>
               <h1>{el.original_title}</h1>
           </div>

       </div>

 );
};

export default MovieCard;