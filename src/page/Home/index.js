import React from 'react';

const Home = () => {
    return (
        <div id="home" style={{
            padding:"100px",
            background:`url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/fgYfch0MGfNEpgzPst49ThKUqA4.jpg") no-repeat center/cover`,
            minHeight:"60vh"
        }}>
            <div className="container">
                <div className="home">
                    <h1>Добро пожаловать.</h1>
                    <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
                    <div className="home--nav">
                    <input type="text" placeholder="Найти фильм,сериал,персону......"/>
                    <button>Search</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;