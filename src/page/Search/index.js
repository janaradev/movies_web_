import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {Link, useParams} from "react-router-dom";

const Search = () => {
    const [movie,setMovie] = useState([])

    const {movieName} = useParams()

    const getMovie = (key)=>{
            axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then((res)=> {
                console.log(res.data.results)
                setMovie(res.data.results)
            })
    }
    useEffect(()=>{
        getMovie(API_KEY)
    },[movieName])
    console.log(movie)
    return (
        <div id="rated">
            <div className="container">
                <div className="rated">
                    {
                        movie.map((el)=>{
                            return(
                                <div className= "rated--card">
                                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="img" style={{
                                            marginLeft:"40px",
                                            borderRadius:"10px"
                                        }}/>
                                    <h1>{el.original_title}</h1>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    );
};

export default Search;
// https://api.themoviedb.org/3/movie/343611?api_key={api_key}
//