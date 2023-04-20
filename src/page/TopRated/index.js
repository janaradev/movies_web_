import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {Link} from "react-router-dom";
// import Search from "../Search";
import {LanguageContext} from "../../Context";

const TopRated = () => {
    const [topRated,setTopRated] = useState([])
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)

    const getTopRated = (key)=>{
        axios(` https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=13`)
            .then((res)=>{
                console.log(res.data.results)
                setTopRated(res.data.results)
            })
    }
    useEffect(()=>{
        getTopRated(API_KEY)

    },[language])
    return (
        <div>
            <div id="rated" style={{
                background:dark === true ? "white" : "black"
            }}>
                <div className="container">
                    <h1 style={{
                        color:dark === true ? "black" : "white"
                    }}>TopRated</h1>
                    <div className="rated">
                        {
                            topRated.map((el)=>{
                                return(
                                    <div className= "rated--card">
                                        <Link to={`/details/${el.id}`}>
                                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="img" style={{
                                                marginLeft:"45px"
                                            }}/>
                                        </Link>
                                        <h1 style={{
                                            color:dark === true ? "black" : "white"
                                        }}>{el.title}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRated;

