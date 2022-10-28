import React from "react";

export default function PokemonList (props){
    const newPokemon = props.pokemon
    return (
        <div>{newPokemon.map(p => (
            <div key={p}>{p}</div>
        ))}</div>
    )
}