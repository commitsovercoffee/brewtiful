<script>
	import minimaNvim from '$lib/assets/minima-nvim.png';

	const apps = [
		{
			name: 'Minima-Nvim',
			desc: 'Starter base configuration for neovim.',
			link: '',
			repo: 'https://github.com/commitsovercoffee/minima-nvim',
			logo: minimaNvim
		}
	];

	const iconStyle =
		'rounded-lg p-2 m-0 h-10 w-10 stroke-[#333] hover:bg-[#333] hover:stroke-[#dfd8c8]';
</script>

<h1 class="font-plex text-[#b95a53]">"Just ship it!" they said. So I did.</h1>

<p>Apps built with more coffee than sense. Use with caution (& maybe a snack). 🍫</p>

{#each apps as app}
	<div class="my-4 rounded-xl p-4 bg-[#dfd8c8] flex gap4 justify-between content-start items-start">
		<div class="flex gap-4">
			<img src={app.logo} alt="" class="rounded-lg m-0 p-0 min-h-20 h-20 min-w-20 bg-[#333]" />
			<div>
				<h3 class="m-0 mb-2 font-plex text-[#333]">{app.name}</h3>
				<p class="m-0 leading-tight">{app.desc}</p>
			</div>
		</div>
		<div class="flex flex-col ml-4">
			{#if app.link != ''}
				<a href={app.link} target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-link {iconStyle}"
						><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path
							d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
						/></svg
					>
				</a>
			{/if}
			<a href={app.repo} target="_blank">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-github {iconStyle}"
					><path
						d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
					/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
				>
			</a>
		</div>
	</div>
{/each}
