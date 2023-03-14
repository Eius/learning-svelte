<script lang="ts">
	import type { LoadedPokemon } from '../../scripts/interfaces/PokemonInterface';
	import { fade } from 'svelte/transition';

	export let pokeman: LoadedPokemon;
</script>

<div class="col-12 col-md-6 col-lg-4" transition:fade={{ duration: 200, delay: 100 }}>
	<a href="/pokemon/{pokeman.id}">
		<div class="card d-flex align-items-center">
			<img src={pokeman.image} alt={pokeman.name + '-image'} />
			<h5 class="p-2">{pokeman.id}. {pokeman.name}</h5>
		</div>
	</a>
</div>

<style lang="scss">
	@import '../styles/custom_variables';

	.card {
		background-color: $light;
		border: 1px solid $dark;
		border-radius: 3px;
	}

	a {
		text-decoration: none;
		color: $body-color;
	}

    a div {
		transition: box-shadow .15s linear;
	}

	a:hover div {
		box-shadow: 0 0 0 4px #b7b7b7;
	}

	h5 {
		text-transform: capitalize;
	}

	img {
		width: 45%;
		height: auto;
	}
</style>
