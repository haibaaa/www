<script>
	import GithubIcon from '~icons/ph/github-logo';
	import EmailIcon from '~icons/ph/envelope';
	import CodeIcon from '~icons/ph/code';

	let content = {
		tech: {
			languages: ['go', 'python', 'java', 'c', 'cpp', 'typescript', 'bash'],
			infrastructure: ['docker', 'nginx', 'linux', 'nix'],
			cloud: ['aws (ec2/s3/lambda/iam/vpc)'],
			databases: ['postgresql', 'mysql', 'sqlite'],
			tools: ['git', 'nix', 'bash', 'neovim']
		}
	};
</script>

<main>
	<h1>about</h1>
	<p>
        hey there! i'm samarth, a cs student at shiv nadar institute of eminence. interested in devops, automation, and infrastructure.
	</p>
	<h2>links</h2>
	<div class="links">
		<a href="https://github.com/haibaaa" class="external icon">
			<GithubIcon /><span class="text">github</span><span class="arrow">/></span>
		</a>
		<a href="https://leetcode.com/u/haibaaa" class="external icon">
			<CodeIcon /><span class="text">leetcode</span><span class="arrow">/></span>
		</a>
		<a href="mailto:9700samarth@gmail.com" class="external icon">
			<EmailIcon /><span class="text">email</span><span class="arrow">/></span>
		</a>
	</div>
	<h2>tech</h2>
	{#each Object.keys(content.tech) as category}
		<div class="info">
			{category} <span class="sub">-></span>
			{#each content.tech[category] as item}
				{item}
				{#if item !== content.tech[category][content.tech[category].length - 1]}
					<span class="sub">/</span>&nbsp;
				{/if}
			{/each}
		</div>
	{/each}
	<h2>colophon</h2>
	<a href="https://github.com/haibaaa/www" class="external"
		>github repo<span class="arrow">/></span></a
	>
	<div class="info">
		stack <span class="sub">-></span> sveltekit <span class="sub">/</span> mdsvex
		<span class="sub">/</span> vite <span class="sub">/</span> cloudflare pages
	</div>
	<div class="info">
		fonts <span class="sub">-></span> space mono <span class="sub">/</span>
		<span style="font-family: 'Space Grotesk Variable'">space grotesk</span>
	</div>
	<div class="info">
		<div class="colors">
			<div class="color" style="background: var(--bg); border: 2px solid var(--bg-2);">bg</div>
			<div class="color" style="background: var(--bg-2);">bg-2</div>
			<div class="color" style="background: var(--bg-3);">bg-3</div>
			<div class="color" style="background: var(--txt-3); color: var(--bg);">txt-3</div>
			<div class="color" style="background: var(--txt-2); color: var(--bg);">txt-2</div>
			<div class="color" style="background: var(--txt); color: var(--bg);">txt</div>
			<div class="color" style="background: var(--txt-0); color: var(--bg);">txt-0</div>
			<div class="color" style="background: var(--pink); color: var(--bg);">pink</div>
			<div class="color" style="background: var(--purple); color: var(--bg);">purple</div>
			<div class="color" style="background: var(--blue); color: var(--bg);">blue</div>
		</div>
	</div>
</main>

<style>
	main {
		width: 100%;
		max-width: 53rem;
		margin: 0 auto 10rem auto;
		padding: 0 1.5rem;
	}

	a {
		font-family: 'Space Mono', monospace;
		font-size: 1.25rem;
		margin: 0.5rem 0;
		display: block;
	}

	.info {
		font-size: 1.125rem;
		margin: 0.5rem 0;
		font-family: 'Space Mono', monospace;
	}

	.colors {
		display: inline-flex;
		margin-top: 0.5rem;
		flex-wrap: wrap;
	}

	.color {
		display: inline-block;
		padding: 0 0.5rem;
		width: 5rem;
		text-align: center;
		font-size: 1.125rem;
	}
</style>
