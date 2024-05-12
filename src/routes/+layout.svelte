<script>
	import '../app.css';

	import '@fontsource/ibm-plex-serif'; // Supports weights 100-700
	import '@fontsource-variable/inter'; // Supports weights 100-900

	import Nav from '$lib/components/Nav.svelte';

	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	export let data;
</script>

<Nav />
{#key data.currentRoute}
	<main
		in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
		out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
	>
		<slot />
	</main>
{/key}
