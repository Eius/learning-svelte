<script>
	import PageTitle from '$lib/components/PageTitle.svelte';

	export let data;
	const { pokeman } = data;
	const type = pokeman.types[0].type.name;
</script>

<svelte:head>
	<title>Pokemon Detail</title>
</svelte:head>

<PageTitle title={pokeman.name} />

<div class="d-flex align-items-center flex-column">
    <p>
        Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong> | Weight:
        <strong>{pokeman.weight}</strong>
    </p>
    <img src={pokeman.sprites["front_default"]} alt={pokeman.name}>
</div>

<style lang="scss">

    img {
        width: 20%;
        min-width: 200px;
        height: auto;
    }

</style>

