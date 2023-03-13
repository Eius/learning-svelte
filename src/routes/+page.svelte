<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PokemanCard from '$lib/components/PokemanCard.svelte';
	import { pokemon } from '../scripts/stores/PokeStore';
	import type { LoadedPokemon } from '../scripts/interfaces/PokemonInterface';

	let searchTerm = '';
	let filteredPokemon: LoadedPokemon[] = [];

	$: {
		console.log(searchTerm);
		if (searchTerm) {
			filteredPokemon = $pokemon.filter(pokeman => pokeman.name.includes(searchTerm));
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<PageTitle title="Svelte Kit Pokedex" />
<div>
	<input
		type="text"
		placeholder="Search pokemon"
		bind:value={searchTerm}
		class="form-control my-4"
	/>
</div>
<div class="row g-3">
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>

<style lang="scss">
	@import '../lib/styles/custom_variables';

	input {
		border-radius: 3px;
	}
</style>
