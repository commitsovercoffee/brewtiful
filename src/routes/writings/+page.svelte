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

<h1 class="font-plex text-[#b95a53]">Lorem ipsum dolor sit amet, qui minim labore adipisicing.</h1>
<p>
	Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
	nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
	Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
	est proident. Nostrud officia pariatur ut officia.
</p>

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
