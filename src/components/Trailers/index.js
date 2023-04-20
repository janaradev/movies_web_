import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import User from "../User";
import {useParams} from "react-router-dom";
import {LanguageContext} from "../../Context";

const Trailers = ({id}) => {
    const [video,setVideo] = useState([])
const {dark} = useContext(LanguageContext)
    const getVideo = (key)=>{
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then((res)=>{
    setVideo(res.data.results)
        })
    }
    useEffect(()=>{
        getVideo(API_KEY)
    },[])
    return (
        <div>
            <div id="video" style={{
                background:dark === true ? "black" : "white"
            }}>
                <div className="container">
                    <div className="video">
                        {
                            video.map((el)=>(
                                <div className="video--card">
                                    <iframe width="340" height="245" src={`https://www.youtube.com/embed/${el.key}`}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen></iframe>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/*<User id={id}/>*/}
        </div>
    );
};

export default Trailers;