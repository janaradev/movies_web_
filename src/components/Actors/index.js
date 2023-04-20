import React, {useState, useEffect, useContext} from 'react';
import Slider from "react-slick";
import axios from "axios";
import {API_KEY} from "../../API";
import Trailers from "../Trailers";
import {Link} from "react-router-dom";
import {LanguageContext} from "../../Context";


const Actors = ({id}) => {

    const [actors,setActors] = useState([])
    const {dark} = useContext(LanguageContext)

    const getActors =(key)=>{
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
            .then((res)=>{
                console.log(res.data)
                setActors(res.data.cast)
            })
    }
    useEffect(()=>{
        getActors(API_KEY)
    },[])
    console.log(actors)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500
    };
    return (
        <>
            <div>
                <div id="actors" style={{
                    background:dark === true ? "black" : "white"
                }}>
                    <div className="container">
                        <h1>Актёрский состав сериала</h1>
                        <div className="actors">
                            <Slider {...settings}>
                                {
                                    actors.map((el)=> (
                                        <div>
                                            <div className="actors-card">
                                                <Link to={`/users/${el.id}`}>
                                                    <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`} alt="" width={170}/>
                                                </Link>

                                                <h3>{el.name}</h3>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
            <Trailers id={id}/>
        </>

    );
};

export default Actors;



