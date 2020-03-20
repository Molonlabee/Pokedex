import React from 'react';
import { Pokemon, pokeApi, PokemonSpecies } from '../Apis/Pokeapi';

interface SearchResultProps {
    pokemon: Pokemon | undefined | null;
}

export function SearchResult({pokemon}: SearchResultProps){
    const [species, setSpecies] = React.useState<PokemonSpecies | undefined>(undefined);
    React.useEffect(() =>{
        async function fetchSpecies() {
            if(pokemon){
            const response = await pokeApi.getPokemonSpecies(pokemon);
            setSpecies(response.data);
            }
        }
        fetchSpecies();
    }, [pokemon]);
    if(pokemon === undefined) {
        return <></>;
    }
    if(pokemon === null) {
        return <div>No Pokemon Found</div>;
    }

    return (
        <div style={{width:'18rem', margin:'auto'}}>
            <img alt={pokemon.name} src={pokemon.sprites.front_default} />
            <h1>{pokemon.name}</h1>
            <p>{species?.flavor_text_entries.filter((f) => f.language.name === 'en')[0].flavor_text}</p>
            <h2>Abilities</h2> 
            <div>
                {pokemon.abilities.map((ability)=>
                <div key={ability.ability.url}>{ability.ability.name} </div>)}
            </div>
        </div>
    )
}