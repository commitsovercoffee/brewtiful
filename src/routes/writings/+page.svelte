<script>
	export let data;

	const tagStyle =
		'm-2 rounded-xl px-2 py-1 border-2 border-[#dfd8c8] text-[#333] hover:bg-[#dfd8c8]';

	let selectedTags = new Set();
	let filteredPosts = data.posts;

	function updateFilterPosts(tag) {
		if (selectedTags.has(tag)) {
			selectedTags.delete(tag);
		} else {
			selectedTags.add(tag);
		}

		selectedTags = selectedTags; // to trigger svelte's reactivity

		filteredPosts = data.posts.filter((post) => {
			return selectedTags.size === 0 || post.meta.tags.some((t) => selectedTags.has(t));
		});
	}
</script>

<svelte:head>
	<title>Writings - Commits Over Coffee</title>
</svelte:head>

<div class="p-2">
	<h1 class="font-plex text-[#b95a53]">Lost Thoughts,<br /> Found Here.</h1>
	<p>
		My attempt at making sense of the world, one blog post at a time. (Spoiler alert: it's mostly
		chaos.) Unfiltered opinions, questionable grammar & a whole lot of ❤️.
	</p>
</div>

<div class="flex flex-wrap justify-start">
	{#each [...new Set(data.posts.flatMap((p) => p.meta.tags))] as tag}
		<button
			class="{tagStyle} {selectedTags.has(tag) && 'bg-[#dfd8c8] text-[#333]'}"
			on:click={() => updateFilterPosts(tag)}>{tag}</button
		>
	{/each}
</div>

{#each filteredPosts as post}
	<a href={post.path} class="underline-offset-8 hover:no-underline decoration-2">
		<h2 class="text-[#333]">{post.meta.title}</h2>
	</a>
	<p class="ml-8 border-l-4 border-[#dfd8c8] pl-4">{post.meta.desc}</p>
{/each}
