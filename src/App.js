import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ListOfPokemon from './components/ListOfPokemon';
import PokemonDetails from './components/PokemonDetails';
import './App.css';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={ListOfPokemon} />
      <Route path='/pokemon/:id' component={PokemonDetails} />

    </Switch>
    </div>
  );
}

export default App;
