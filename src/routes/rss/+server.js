import { fetchMarkdownPosts } from '$lib/utils';

const siteURL = 'https://commitsovercoffee.com';
const siteTitle = 'Commits Over Coffee';
const siteDescription = "Sourav's corner of the internet.";

export const prerender = true;

export const GET = async () => {
	try {
		const allPosts = await fetchMarkdownPosts();
		const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

		const body = render(sortedPosts);
		const options = {
			headers: {
				'Cache-Control': 'max-age=0, s-maxage=3600',
				'Content-Type': 'application/xml'
			}
		};

		return new Response(body, options);
	} catch (error) {
		console.error('Error generating RSS feed:', error);
		return new Response('Internal Server Error', { status: 500 });
	}
};

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
	<language>en-US</language>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss" rel="self" type="application/rss+xml"/>
${posts
	.map(
		(post) => `<item>
<guid isPermaLink="true">${siteURL}${post.path}</guid>
<title>${post.meta.title}</title>
<link>${siteURL}${post.path}</link>
<description>${post.meta.desc}</description>
</item>`
	)
	.join('')}
</channel>
</rss>
`;
