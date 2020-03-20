import React from 'react';
import { pokeApi, Pokemon } from './Apis/Pokeapi';
import './App.css';
import {Searchbar} from './components/Searchbar';
import {SearchResult} from './components/SearchResult';

const App: React.FC = () => {
  const [pokemon, setPokemon] = React.useState<Pokemon | undefined | null>(undefined);
  
  const searchForPokemon = async(pokemonName:string)=> {
    try{
    const response =  await pokeApi.getPokemon(pokemonName);
    setPokemon(response.data);
   }
   catch{
    setPokemon(null);
   }
  };
  return (
    <div className='App'>
      <Searchbar onSearch = {searchForPokemon} />
      <SearchResult pokemon={pokemon} />
    </div>

  );
};
export default App;
