import { writable } from "svelte/store";
import type { Pokemon, LoadedPokemon } from "../interfaces/PokemonInterface";

export const pokemon = writable<LoadedPokemon[]>([]);


const fetchPokemon = async (num: number) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
    const response = await fetch(url);
    const data = await response.json();
    const loadedPokemon = data.results.map((pokemon: Pokemon, index: number) => {
        return {
            name: pokemon.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }
    });
    pokemon.set(loadedPokemon)
};
fetchPokemon(1008);