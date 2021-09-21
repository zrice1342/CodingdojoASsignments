
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const AllPets = () => {

    //have a variable to store all the pets i get back from the api in
    const [allPets, setAllPets] = useState([])

    //call the api upon initial rendering (hint hint) of the component and save the array of pets into my variable to store all the pets in
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
            .then(res=>{
                // console.log("******res is this-->", res)
                setAllPets(res.data.results)
            })
            .catch(err=> console.log("ERRORRRR-->", err))
    },[])
    return (
        <div>
            <h3>All the pets looking for a good home</h3>
            {/* display all the pets */}
                    <table class="table">
                        <thead>
                        <tr>    
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                    {allPets.map((pet,i)=>{
                    return <tr key = {i}>
                <td>Pet Name: {pet.name}</td>
                <td>Pet Type: {pet.type}</td>
                <td><Link to={`/pets/${pet._id}`}>Details</Link> | <Link to = {`/pets/edit/${pet._id}`} >Edit</Link></td>
                    </tr>
            })
            }
            </tbody>
                    </table>
        </div>
    );
};


export default AllPets;