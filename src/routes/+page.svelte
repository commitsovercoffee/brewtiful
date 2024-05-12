<script>
	import profile from '$lib/assets/profile.jpg';
	const iconStyle =
		'rounded-lg p-2 m-2 h-12 w-12 stroke-[#333333] hover:bg-[#333333] hover:stroke-[#dfd8c8]';

	const links = {
		mail: 'mailto:commitsovercoffee@gmail.com?subject=Collaboration Inquiry&body=Hello!',
		github: 'https://github.com/commitsovercoffee',
		youtube: 'https://youtube.com/@commitsovercoffee',
		steam: 'https://steamcommunity.com/id/commitsovercoffee',
		discord: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		rss: '/rss',
		support: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
	};
</script>

<svelte:head>
	<title>Commits Over Coffee</title>
</svelte:head>

<h1 class="font-plex text-[#b95a53]">Yet another personal website.</h1>
<p>Hi, I'm <strong>Sourav</strong>. Welcome to my corner of the internet.</p>

<div class="flex">
	<div class="m-1 rounded-xl flex-1">
		<img
			src={profile}
			alt="profile-pics"
			loading="lazy"
			class="m-0 rounded-xl object-cover h-full"
		/>
	</div>
	<div class="m-1 rounded-xl px-4 flex-1 bg-[#333] text-[#f0ebe3]">
		<p>
			I am a self taught developer, currently building FOSS tools for educators & learners. I work
			remotely from my hometown, Ranchi 🍃.
		</p>
		<p>
			When I'm not working, I like to read (books, blogs & beyond), rice my linux machine, play
			video games or shoot hoops 🏀. When I'm not doing any of those things, I'm probably working on
			a side project or yak shaving.
		</p>
		<p>
			Thanks for getting to know me! Feel free to reach out for collaboration, coversation or code !
		</p>
		<p>I use arch btw. ✨</p>
	</div>
</div>
<div class="m-1 p-2 rounded-xl flex bg-[#dfd8c8] justify-evenly">
	<a href={links.mail} target="_blank">
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
			class="lucide lucide-mail {iconStyle}"
			><rect width="20" height="16" x="2" y="4" rx="2" /><path
				d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
			/></svg
		>
	</a>
	<a href={links.github} target="_blank">
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
	<a href={links.youtube} target="_blank">
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
			class="lucide lucide-youtube {iconStyle}"
			><path
				d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
			/><path d="m10 15 5-3-5-3z" /></svg
		>
	</a>

	<a href={links.steam} target="_blank">
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
			class="lucide lucide-gamepad-2 {iconStyle}"
			><line x1="6" x2="10" y1="11" y2="11" /><line x1="8" x2="8" y1="9" y2="13" /><line
				x1="15"
				x2="15.01"
				y1="12"
				y2="12"
			/><line x1="18" x2="18.01" y1="10" y2="10" /><path
				d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
			/></svg
		>
	</a>

	<a href={links.discord} target="_blank">
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
			class="lucide lucide-message-square-text {iconStyle}"
			><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path
				d="M13 8H7"
			/><path d="M17 12H7" /></svg
		>
	</a>

	<a href={links.rss} target="_blank">
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
			class="lucide lucide-rss {iconStyle}"
			><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle
				cx="5"
				cy="19"
				r="1"
			/></svg
		>
	</a>

	<a href={links.support} target="_blank">
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
			class="lucide lucide-heart rounded-lg p-2 m-2 h-12 w-12 stroke-[#333333] hover:bg-[#333333] hover:stroke-[#b95a53] hover:fill-[#b95a53]"
			><path
				d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
			/></svg
		>
	</a>
</div>
