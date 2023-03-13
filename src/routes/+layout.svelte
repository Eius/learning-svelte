<script>
	import "@fontsource/roboto"
	import "$lib/styles/index.scss"
	import Header from "$lib/components/Header.svelte";
</script>

<div class="app">
	<Header />
	<main class="container">
		<slot />
	</main>

</div>
