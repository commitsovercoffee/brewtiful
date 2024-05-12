<script>
	const iconStyle =
		'rounded-lg p-2 h-12 w-12 stroke-[#333333] hover:bg-[#333333] hover:stroke-[#dfd8c8]';

	const links = {
		mail: 'mailto:commitsovercoffee@gmail.com?subject=Collaboration Inquiry&body=Hello!',
		github: 'https://github.com/commitsovercoffee',
		youtube: 'https://youtube.com/@commitsovercoffee',
		rss: '/rss'
	};
</script>

<div class="p-2 rounded-xl bg-[#dfd8c8] flex justify-evenly items-center">
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
</div>
