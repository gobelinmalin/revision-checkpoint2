import React  from 'react';

const PokemonDetails = ({location}) => {

  return (
    <div>Page PokemonDetails
    <div>{location.query.height}</div>
    <div>{location.query.weight}</div>
    <div>{location.query.species.name}</div>
    </div>
  )
}
export default PokemonDetails;