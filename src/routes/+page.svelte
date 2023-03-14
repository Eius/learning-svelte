<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PokemanCard from '$lib/components/PokemanCard.svelte';
	import type { LoadedPokemon } from '../scripts/interfaces/PokemonInterface';

	export let data;
	const { pokemon } = data;

	let searchTerm = '';
	let filteredPokemon: LoadedPokemon[] = [];

	$: {
		if (searchTerm) {
			filteredPokemon = pokemon.filter((pokeman: LoadedPokemon) => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()));
		} else {
			filteredPokemon = [...pokemon];
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
		border-color: $dark;
	}
</style>
