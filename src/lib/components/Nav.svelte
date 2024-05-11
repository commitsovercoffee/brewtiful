<script>
	// get current page url
	import { page } from '$app/stores';
	$: currentURL = $page.url.pathname.split('/').pop() || $page.url.pathname;

	const navIconStyle = 'rounded-xl p-2 w-12 h-12 transition-all duration-200 ease-in';
</script>

<nav class="mb-16 flex justify-between items-center">
	<a
		href="/"
		class="no-underline hover:underline underline-offset-8 font-plex text-2xl font-bold text-[#333]"
		>CommitsOverCoffee</a
	>
	<div class="rounded-2xl p-2 bg-[#dfd8c8] flex">
		<a href="/" class="m-1">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#333333"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-coffee {navIconStyle} {currentURL === '/'
					? 'bg-[#b95a53] stroke-[#dfd8c8]'
					: 'hover:bg-[#333] hover:stroke-[#dfd8c8]'}"
				><path d="M10 2v2" /><path d="M14 2v2" /><path
					d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
				/><path d="M6 2v2" /></svg
			>
		</a>
		<a href="writings" class="m-1">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#333333"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-notebook-pen {navIconStyle} {currentURL === 'writings'
					? 'bg-[#b95a53] stroke-[#dfd8c8]'
					: 'hover:bg-[#333] hover:stroke-[#dfd8c8]'}"
				><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" /><path
					d="M2 6h4"
				/><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><path
					d="M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z"
				/></svg
			>
		</a>
		<a href="apps" class="m-1">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#333333"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-layout-grid {navIconStyle} {currentURL === 'apps'
					? 'bg-[#b95a53] stroke-[#dfd8c8]'
					: 'hover:bg-[#333] hover:stroke-[#dfd8c8]'}"
				><rect width="7" height="7" x="3" y="3" rx="1" /><rect
					width="7"
					height="7"
					x="14"
					y="3"
					rx="1"
				/><rect width="7" height="7" x="14" y="14" rx="1" /><rect
					width="7"
					height="7"
					x="3"
					y="14"
					rx="1"
				/></svg
			>
		</a>
	</div>
</nav>
