import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios';


const Display = () => {
    const{category, id} = useParams();
    const[info, setInfo] = useState({});

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
        .then(res=>{
            console.log("hi")
            console.log(res)
            setInfo(res.data)
        })
        .catch(err=>console.log(err))
    },[category,id])

    return (
        <div>
            {category == "people"?
            <>
                <h2> Name {info.name}</h2>
                <h3> Height {info.height}</h3>
                <h3> Mass {info.mass}</h3>
            </>:
            category == "planets"?
            <>
                <h2> Name {info.name}</h2>
                <h3> Climate {info.climate}</h3>
                <h3> Terrian {info.terrain}</h3>
            </>:
            category == "films"?
            <>
                <h2> Name {info.title}</h2>
                <h3> Director {info.director}</h3>
                <h3> Products {info.products}</h3>
            </>:
            <>
            </>
        }
        </div>
    );
};


export default Display;