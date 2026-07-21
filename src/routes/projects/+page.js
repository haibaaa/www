import { getPosts } from '$lib/js/posts.js';

export async function load() {
	const modules = import.meta.glob('/src/content/projects/*/+*.md');
	let posts = await getPosts(modules);
	posts = posts.sort((a, b) => a.order - b.order);

	return {
		posts,
		meta: {
			title: 'projects',
			description: "samarth's projects."
		}
	};
}
