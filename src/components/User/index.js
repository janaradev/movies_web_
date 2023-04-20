import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";

const User = ({id}) => {
    const [users, setUsers] = useState({})
    const [bio, setBio] = useState(300)

    const {personId} = useParams()

    console.log(personId)
    const getUser = (id,key)=>{
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=en-US`)
            .then((res)=>{
                setUsers(res.data)
            })
    }

    useEffect(()=>{
        getUser(personId,API_KEY)
    }, [])
    const openBio = (text)=>{
        if (bio === 300){
            return setBio(text.length)
        } return setBio(300)
    }
    console.log(users)
const {profile_path,name,birthday,biography,place_of_birth,also_known_as} = users


    return (
        <>
            <div id="user">
                <div className="container">
                    <div className="user">
                        <div className="user--image">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt=""/>
                        </div>
                        <div className="user--card">
                            <h1>{name}</h1>
                            <h2>{birthday}</h2>
                            <h4>{place_of_birth}</h4>
                            <h2>Биография</h2>
                            <h3>{also_known_as}</h3>
                            <p>{biography?.slice(0,bio)}</p>
                            <span onClick={()=>{
                                openBio(biography)
                            }}>{bio === 300 ? "читать еще >" : "закрыть "}</span>

                        </div>

                    </div>
                </div>



            </div>
        </>
    );

};

export default User;
