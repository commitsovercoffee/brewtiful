<script>
	import profile from '$lib/assets/profile.jpg';
	import Socials from '$lib/components/Socials.svelte';
</script>

<svelte:head>
	<title>Commits Over Coffee</title>
</svelte:head>

<div class="p-2">
	<h1 class="font-semibold text-[#b95a53]">Yet another<br /> personal website.</h1>
	<p>Hi, I'm <strong>Sourav</strong>.<br /> Welcome to my corner of the internet.</p>
</div>

<div class="flex flex-col sm:flex-row gap-2">
	<div class="flex flex-col gap-2">
		<img
			src={profile}
			alt=""
			class="rounded-full aspect-square m-8 sm:m-0 sm:border-none border-8 border-[#333] sm:p-0 sm:aspect-auto sm:rounded-xl object-cover"
		/>
		<Socials />
	</div>
	<div class="rounded-xl px-4 bg-[#333333] text-[#f0ebe3]">
		<p>
			I am a self taught developer, currently building FOSS tools for educators & learners. I work
			remotely from my hometown, Ranchi 🍃.<br /><br /> When I'm not working, I like to read (books,
			blogs & beyond), rice my linux machine, play video games or shoot hoops 🏀. When I'm not doing
			any of those things, I'm probably working on a side project or yak shaving.<br /><br /> Thanks
			for getting to know me!<br /> Feel free to reach out. ✨
		</p>
	</div>
</div>
