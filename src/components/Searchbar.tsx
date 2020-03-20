import React, { Component } from 'react';
// import { pokeApi } from '../Apis/Pokeapi';
// import { Pokemon } from '../Apis/Pokeapi';

interface SearchbarProps {
    onSearch: (pokemon: string) => void;
}

export function Searchbar({onSearch}: SearchbarProps) {
    const [pokemonName, setPokemonName] = React.useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => { 
        setPokemonName(event.target.value);
      };

      const searchForPokemon = async(event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
       onSearch(pokemonName);
    };
       
    return (
        <form onSubmit={searchForPokemon}>
            <input value={pokemonName} placeholder='Search For Pokemon' onChange={handleNameChange} />
            <button type='submit'>SEARCH</button>
        </form>
    );
}