import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Poke = (props) => {
    const [pokemon, setPokemon] = useState([]);

        function GetPoke(){
                axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=200')
                    .then(response=>{setResponseData(response.data)})
            }
        
    return (
        <>
        <button onClick = {GetPoke}> See all pokemon</button>
        <div>
            {pokemon.length > 0 && pokemon.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
        </>
    );
};
export default Poke;