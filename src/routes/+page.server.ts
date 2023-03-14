import type { Pokemon } from "../scripts/interfaces/PokemonInterface";


export async function load({ fetch, params }) {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=1008`;
	const response = await fetch(url);
	const data = await response.json();
	const pokemon = data.results.map((pokemon: Pokemon, index: number) => {
		return {
			name: pokemon.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
	return { pokemon }
}
