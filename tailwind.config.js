/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				inter: "'Inter Variable', sans-serif ",
				plex: "'IBM Plex Serif', serif "
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
