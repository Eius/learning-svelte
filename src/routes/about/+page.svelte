<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<PageTitle title="What is this project about?" />

<p>
	Welcome to my Svelte Pokédex! This is a project I built to learn how to use Svelte. The app allows
	you to search through a list of 150 Pokémon by name, using a simple search bar at the top of the
	page. As you type in your search query, the app filters the list of Pokémon in real time,
	displaying only the ones that match your search.
</p>
<p>
	Each Pokémon in the list is displayed as a card, featuring its name, ID number, and an image. You
	can click on any card to view more detailed information about that Pokémon, including its type,
	abilities, and stats. I built this app as a personal learning project, and I hope you find it
	useful and enjoyable to use! If you have any feedback or suggestions, please feel free to contact
	me at zacikmarek@gmail.com. Thanks for visiting, and happy Poké-hunting!
</p>

<style lang="scss">

    p {
        font-size: 1.2em;
        text-align: justify;
    }

</style>
