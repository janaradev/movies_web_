import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {API_KEY} from "../../API";
import Actors from "../Actors";
import {LanguageContext} from "../../Context";


const MovieDetails = () => {
    const [movie, setMovie] = useState({})
    const {language}=useContext(LanguageContext)
    const {id} = useParams()
    const getDetails = (id,key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${language}`)
            .then((res) => {
                setMovie(res.data)
            })
    }
    useEffect(() => {
        getDetails(id,API_KEY)
    }, [language])
    console.log(movie)

    return (
        <div>
            <div id="detail" style={{
                background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}") no-repeat center/cover`,
                boxShadow: "inset 900px 0 0 300px rgba(0,0,0,0.7)"
            }}>
                <div className="container">
                    <div className="detail">
                        {
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} style={{
                            }}/>
                        }
                        <div className="detail--info">
                            <h1>{movie.original_title}</h1>

                            <p>{movie.overview}</p>
                            <h4> Время: {Math.floor(movie.runtime / 60)}<small>ч</small> {movie.runtime % 60}<small>min</small></h4>
                           <h1> Рейтинг:
                           </h1><div className="detail--info__total" >
                                {Math.round(movie.vote_average * 10)}%
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Actors id={id}/>
        </div>
    );
};
export default MovieDetails;