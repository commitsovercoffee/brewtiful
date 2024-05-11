<script>
	let tags = [
		'linux',
		'opinion',
		'idea',
		'note',
		'cheatsheet',
		'tutorial',
		'review',
		'finance',
		'book',
		'movie'
	];

	let writings = [
		{
			title: 'Lorem Ipsum',
			desc: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
		}
	];
</script>

<h1 class="font-plex text-[#b95a53]">Lorem ipsum dolor sit amet, qui minim labore adipisicing.</h1>
<p>
	Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
	nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
	Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
	est proident. Nostrud officia pariatur ut officia.
</p>

<div class="flex flex-wrap justify-start">
	{#each tags as tag}
		<button
			class="m-2 rounded-xl px-2 py-1 border-2 border-[#dfd8c8] text-[#333] hover:bg-[#dfd8c8]"
			>{tag}</button
		>
	{/each}
</div>

{#each writings as writing}
	<a href="" class="underline-offset-8 hover:no-underline decoration-2">
		<h2 class="text-[#333]">{writing.title}</h2>
	</a>
	<p class="ml-8 border-l-4 border-[#dfd8c8] pl-4">{writing.desc}</p>
{/each}
