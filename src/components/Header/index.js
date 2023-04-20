import React, {useContext, useState} from 'react';
import logo from  "../../img/Logo.svg"
import { NavLink, useNavigate} from "react-router-dom";
import {LanguageContext} from "../../Context";
import {FaMoon, FaRegMoon} from "react-icons/fa";

const Header = () => {
    const [search,setSearch] = useState("")
    const nav = useNavigate()
    const {setLanguage} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    const {bro} = useContext(LanguageContext)
    const {setBro} = useContext(LanguageContext)

    return (
        <div>
       <div id="header">
           <div className="container">
               <div className="header" style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                   <img src={logo} alt="img"/>

                   <div className="header--nav">
                       <NavLink to={"/"} className="header--nav__link">Home</NavLink>
                       <NavLink to={"/popular"} className="header--nav__link">Popular</NavLink>
                       <NavLink to={"/top_rated"} className="header--nav__link">TopRated</NavLink>
                   </div>

                   <select onChange={(e)=>setLanguage(e.target.value)}>
                       <option value="en-US">English</option>
                       <option value="ru-RU">Русский</option>
                       <option value="fr-FR">France</option>
                   </select>
                   <div className="header--search">
                       <input type="search"
                              onChange={(e)=>{
                          setSearch(e.target.value)
                       }}
                              onKeyDown={(e)=>{
                                  if (e.key === "Enter"){
                                      nav(`/movie/search_movie/${search}`)
                                  }
                              }}
                       />
                       <button
                           onClick={()=>{
                               nav(`/movie/search_movie/${search}`)
                           }}>Sign in</button>
                   </div>
                   <div className="header--dark">
                       <button onClick={()=>setDark(true)} className="btn"><FaRegMoon/></button>
                       <button onClick={()=>setDark(false)}><FaMoon/></button>
                      <button onClick={()=> setBro(bro + 1)}>page</button>
                   </div>

               </div>
           </div>
       </div>
        </div>
    );
};

export default Header;