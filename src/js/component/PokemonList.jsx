import React from "react";

export default function PokemonList (props){
    const newPokemon = props.pokemon
    return (
        <div>
            <h1>Aqui va la lista de pokemones</h1>
            {newPokemon.map(p => (
            <h3 key={p}>{p}</h3>    
        ))}
        </div>
    )
}