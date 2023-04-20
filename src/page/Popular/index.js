import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {Link} from "react-router-dom";
import {LanguageContext} from "../../Context";

const Popular = () => {
    const [popular,setPopular] = useState([])
    const [active,setActive]= useState(1)
     const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const {bro}=useContext(LanguageContext)

const getPopular = (key)=>{
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${active,bro}`)
            .then((res)=>{
                console.log(res.data.results)
                setPopular(res.data.results)
            })
}
useEffect(()=>{
    getPopular(API_KEY)
},[language,active,bro])
    console.log(active)


    return (
        <div id="popular"  style={{
            background:dark === true ? "white" : "black"
        }}>
        <div className="container">
            <h2 style={{
                color:dark === true ? "black" : "white"
            }}>Popular</h2>
            <div className="popular">
                {
                    popular.map((el)=>{
                        return(
                            <div className= "popular--card">
                                <Link to={`/details/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="img" style={{
                                        marginLeft:"45px",
                                        borderRadius:"15px",
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
            <div className="popularBtn">
                <button onClick={()=>setActive(active + 1)}>дальше</button>
                <h1 style={{
                    color:"white",
                    fontSize:"18px",
                    fontWeight:"700"
                }}>page.{active}</h1>
                <button onClick={()=>setActive(active - 1)}>назад</button>
            </div>
        </div>
        </div>
    );

    //
};


export default Popular;


