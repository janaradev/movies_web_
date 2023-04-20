import React from 'react';
import Header from "./components/Header";
import "./App.scss"
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Popular from "./page/Popular";
import TopRated from "./page/TopRated";
import MovieDetails from "./components/MovieDetails";
import User from "./components/User";
import Actors from "./components/Actors";
import Search from "./page/Search";
import Footer from "./components/Footer";


const App = () => {
    return (
        <div className="App">
          <Header/>
            <Routes>
                <Route path={"/"} element={ <Home/> }/>
                <Route path={"/popular"} element={ <Popular/> }/>
                <Route path={"/top_rated"} element={<TopRated/> }/>
                <Route path={"/details/:id"} element={<MovieDetails/>} />
                <Route path={"/actors/:id"} element={<Actors/>}/>
                <Route path={"/users/:personId"} element={<User/>}/>
                <Route path={"/movie/search_movie/:movieName"} element={<Search/>}/>
            </Routes>
            <Footer/>

        </div>
    );
};

export default App;


