import React, {
    useEffect,
    useState
} from 'react';
import {
    useParams
} from "react-router";
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const OnePet = () => {
        const {
            idParam
        } = useParams();
        const [petInfo, setPetInfo] = useState({})
const [deleteClicked, setDeleteClicked] =useState(false)
const history = useHistory();



                useEffect(() => {
                    axios.get(`http://localhost:8000/api/pets/${idParam}`)
                        .then(res => {
                            console.log("response when trying to get one ninja-->", res)
                            setPetInfo(res.data.results)
                        })
                        .catch(err => console.log("errrrrrrr ", err))
                }, [deleteClicked])
                
                
                const deleteClickHandler = (e,idParam)=>{
                    console.log("deleteing", idParam)
                    axios.delete(`http://localhost:8000/api/pets/${idParam}`)
                    .then(res=>{
                        console.log("response afrter delet",res)
                        setDeleteClicked(!deleteClicked)
                        history.push("/");
    
                    })
                    .catch(err=>console.log("err when deleteing"))
                }

    return (
        <div>
            <h1>Info about pet with the name of {petInfo.name}</h1>
            <p>Name: {petInfo.name}</p>
            <p>Type: {petInfo.type}</p>
            <p>Description: {petInfo.description}</p>
            <p>skill One: {petInfo.skillOne}</p>
            <p>skill Two: {petInfo.skillTwo}</p>
            <p>skill Three: {petInfo.skillThree}</p>
            <p><button onClick= {(e)=> deleteClickHandler(e,petInfo._id)}> Adopt me!</button></p>
        </div>
    );
};


export default OnePet;