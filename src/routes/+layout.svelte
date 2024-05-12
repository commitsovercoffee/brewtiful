<script>
	import '../app.css';

	import '@fontsource/ibm-plex-serif'; // Supports weights 100-700
	import '@fontsource-variable/inter'; // Supports weights 100-900

	import Nav from '$lib/components/Nav.svelte';

	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import Loader from '$lib/components/Loader.svelte';

	export let data;

	let isLoading = false;
	beforeNavigate(() => (isLoading = true));
	afterNavigate(() => (isLoading = false));
</script>

<Nav />
<!--
A #key block takes an expression, and automatically re-renders its contents
whenever that expression changes.
-->
{#key data.currentRoute}
	<main
		in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
		out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
	>
		{#if isLoading}
			<Loader />
		{:else}
			<slot />
		{/if}
	</main>
{/key}
