import React, { Component }  from 'react';
import Axios from 'axios';

import Pokemon from './Pokemon'

class ListOfPokemon extends Component {
  state = {
    pokemons: []
  }

  componentDidMount() {
    Axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
      .then(response => response.data.results)
      .then(data => this.setState({ pokemons: data}))
  }

  deletePokemon = (name) => {
    const { pokemons } = this.state;
    const newArrayPokemon = pokemons.filter(element => element.name !== name);
    this.setState({pokemons: newArrayPokemon})
  }



  render() {
    const { pokemons } = this.state;
    return (
      <div>
        <div>Page List Pokemon</div>
        {pokemons.map(pokemon => <Pokemon pokemon={pokemon} deletePokemon={this.deletePokemon} />)}
      </div>
    )
  }
}

export default ListOfPokemon;