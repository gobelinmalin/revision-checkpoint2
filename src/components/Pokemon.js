import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Pokemon = ({pokemon, deletePokemon}) => {
  const [ pokemonDetails, setPokemonDetails ] = useState({});

  useEffect(() => {
    Axios.get(`${pokemon.url}`)
      .then(response => response.data)
      .then(data => setPokemonDetails(data))
  }, [])
  
  return (
    <div>
      Name : 
      <Link to={{pathname: `/pokemon/${pokemonDetails.id}`, query : pokemonDetails}}>{pokemon.name}</Link> 
      <button onClick={() => deletePokemon(pokemon.name)}>Delete</button>
    </div>
  )
}

export default Pokemon