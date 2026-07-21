# Changes from refact0r/www

This document tracks all modifications made in this fork of [refact0r/www](https://github.com/refact0r/www).

## Branding

### `package.json`
Changed project name.
```diff
-  "name": "www",
+  "name": "haibaaa",
```

### `README.md`
Replaced with portfolio description and added credits section.
```diff
-my website <https://refact0r.dev>.
+samarth patel's portfolio <https://haibaaa.dev>.

 built with sveltekit & mdsvex, deployed on cloudflare pages.
+
+## Credits
+
+Forked from [refact0r/www](https://github.com/refact0r/www) by [refact0r](https://refact0r.dev). Licensed under [GPL-3.0](LICENSE).
```

### `src/routes/+page.svelte`
Changed heading and bio text. Removed `/pics` nav link.
```diff
-<h1>refact0r</h1>
+<h1>haibaaa</h1>

-<p>hey there! i'm yifan, a cs student interested in ai, web dev, design, and more.</p>
+<p>hey there! i'm samarth, a cs student at shiv nadar institute of eminence.</p>

-		<a class="nav" href="/pics">
-			<span class="arrow">-></span><span class="slash">/</span>pics
-		</a>
```

### `src/routes/+page.js`
Updated metadata.
```diff
-	title: 'refact0r',
-	description: 'my website/portfolio/blog.'
+	title: 'haibaaa',
+	description: "samarth patel's portfolio."
```

### `src/routes/+layout.svelte`
Updated site name and removed `/pics` from navigation.
```diff
 	const pages = [
 		{ name: 'about', path: '/about' },
 		{ name: 'projects', path: '/projects' },
 		{ name: 'blog', path: '/blog' },
-		{ name: 'pics', path: '/pics' },
 		{ name: 'contact', path: '/contact' }
 	];

-	<a href="/"><h1>refact0r</h1></a>
+	<a href="/"><h1>haibaaa</h1></a>
```

### `src/routes/+layout.js`
Updated metadata.
```diff
-	title: 'refact0r',
-	description: 'my website/portfolio/blog.'
+	title: 'haibaaa',
+	description: "samarth patel's portfolio."
```

### `src/lib/components/PageHead.svelte`
Replaced all refact0r domains and social handles with haibaaa equivalents.
```diff
-	<meta property="og:site_name" content="refact0r.dev" />
+	<meta property="og:site_name" content="haibaaa.dev" />

-	<meta name="twitter:site" content="@refact_r" />
-	<meta name="twitter:creator" content="@refact_r" />
+	<meta name="twitter:site" content="@haibaaa" />
+	<meta name="twitter:creator" content="@haibaaa" />

-		<meta property="og:image" content={'https://www.refact0r.dev' + image.img.src} />
+		<meta property="og:image" content={'https://www.haibaaa.dev' + image.img.src} />

-		<meta name="twitter:image" content={'https://www.refact0r.dev' + image.img.src} />
+		<meta name="twitter:image" content={'https://www.haibaaa.dev' + image.img.src} />
```

## Analytics

### `src/app.html`
Removed Umami analytics tracking script.
```diff
 		<meta name="viewport" content="width=device-width, initial-scale=1" />
-		<script
-			defer
-			src="/stats/script.js"
-			data-website-id="e82247ab-f7f5-44bc-a27b-0f2b08462811"
-		></script>
 		%sveltekit.head%
```

## Config

### `svelte.config.js`
Added prerender config to ignore unseen routes (avoids build errors from removed content).
```diff
 		inlineStyleThreshold: Infinity
+	},
+	prerender: {
+		handleUnseenRoutes: 'ignore'
 	}
```

## About Page

### `src/routes/about/+page.svelte`
Major rewrite. Replaced social links, tech stack, bio, and removed friends/webring section.
```diff
-	import GithubIcon from '~icons/ph/github-logo';
-	import DiscordIcon from '~icons/ph/discord-logo';
-	import KofiIcon from '~icons/ph/coffee';
-	import XIcon from '~icons/ph/x-logo';
+	import GithubIcon from '~icons/ph/github-logo';
+	import EmailIcon from '~icons/ph/envelope';
+	import CodeIcon from '~icons/ph/code';

 		tech: {
-			languages: ['js', 'ts', 'python', 'java', 'dart', 'html', 'css'],
-			frameworks: ['sveltekit', 'flutter', 'tensorflow'],
-			tools: ['vscode', 'claude code', 'codex', 'figma', 'inkscape']
+			languages: ['go', 'python', 'java', 'c', 'cpp', 'typescript', 'bash'],
+			infrastructure: ['docker', 'nginx', 'linux', 'nix'],
+			cloud: ['aws (ec2/s3/lambda/iam/vpc)'],
+			databases: ['postgresql', 'mysql', 'sqlite'],
+			tools: ['git', 'nix', 'bash', 'neovim']
 		}

-		hey there! i'm yifan, a cs student at uw in seattle. i also go by the name refact0r online.
+        hey there! i'm samarth, a cs student at shiv nadar institute of eminence. interested in devops, automation, and infrastructure.

-		<a href="https://github.com/refact0r" class="external icon">github</a>
-		<a href="https://x.com/refact_r" class="external icon">x/twitter</a>
-		<a href="https://discord.com/users/508863359777505290" class="external icon">discord</a>
-		<a href="https://ko-fi.com/refact0r" class="external icon">ko-fi</a>
+		<a href="https://github.com/haibaaa" class="external icon">github</a>
+		<a href="https://leetcode.com/u/haibaaa" class="external icon">leetcode</a>
+		<a href="mailto:9700samarth@gmail.com" class="external icon">email</a>

-		<a href="https://github.com/refact0r/personal" class="external">github repo</a>
-		<a href="https://us.umami.is/share/HwZnyuHQ5Rqz3NWf/refact0r.dev" class="external">analytics</a>
+		<a href="https://github.com/haibaaa/www" class="external">github repo</a>

-	<h2>friends</h2>
-	... (friends section, webring, 88x31 badges removed)
```

### `src/routes/about/+page.js`
```diff
-		description: 'info about me.'
+		description: 'about samarth patel.'
```

## Contact Page

### `src/routes/contact/+page.svelte`
Complete rewrite with new contact info. Replaced Discord with phone/GitHub.
```diff
-	import DiscordIcon from '~icons/ph/discord-logo';
-	import EmailIcon from '~icons/ph/envelope';
+	import GithubIcon from '~icons/ph/github-logo';
+	import EmailIcon from '~icons/ph/envelope';
+	import PhoneIcon from '~icons/ph/phone';

-	let discordCopied = $state(false);
+	let phoneCopied = $state(false);

-		await navigator.clipboard.writeText('refact0r.contact@gmail.com');
+		await navigator.clipboard.writeText('9700samarth@gmail.com');

-	const copyDiscord = async () => {
-		await navigator.clipboard.writeText('refact0r');
-		discordCopied = true;
-		setTimeout(() => (discordCopied = false), 1000);
+	const copyPhone = async () => {
+		await navigator.clipboard.writeText('+91-88005-76791');
+		phoneCopied = true;
+		setTimeout(() => (phoneCopied = false), 1000);

-		<DiscordIcon />discord -> refact0r
+		<PhoneIcon />phone -> +91-88005-76791
+		<GithubIcon />github -> haibaaa
```

### `src/routes/contact/+page.js`
```diff
-		description: 'ways to get in touch.'
+		description: 'get in touch with samarth.'
```

## Blog

### `src/routes/blog/+page.js`
```diff
-			description: 'posts about various topics.'
+			description: 'posts about devops and infrastructure.'
```

### `src/routes/blog/rss.xml/+server.js`
Updated site URL and descriptions.
```diff
-	const siteUrl = 'https://refact0r.dev';
+	const siteUrl = 'https://haibaaa.dev';

-		<title>refact0r's blog</title>
-		<description>posts about various topics.</description>
+		<title>haibaaa's blog</title>
+		<description>devops, automation, and infrastructure.</description>
```

## Projects Page

### `src/routes/projects/+page.js`
```diff
-			description: "projects i've worked on."
+			description: "samarth's projects."
```

## AI Instructions

### `.github/instructions/general.instructions.md`
Updated project overview and removed references to deleted content.
```diff
-# project overview
-
-this is my personal website. it includes information about me, my projects, my blog posts, my photography, and contact methods.
+# project overview
+
+samarth patel's personal portfolio site. includes about, projects, blog, and contact sections.

-- `src/content/` mdsvex content files (blog posts, projects) and images for the `/pics` page
+- `src/content/` mdsvex content files (blog posts and projects)

-  - `src/lib/assets/` static assets (e.g. fonts, lottie animations, shiki css).
+  - `src/lib/assets/` static assets (e.g. fonts, shiki css).
```

## Content Removed

- **All original projects** (18): audibrief, cmail, demeter, dubflow, forgotten-europe, forklift, gradenight, littlemastersclub, midnight, number-alchemy, orbit, papercut, pinscout, re-collect, re-start, respir, seattleaccessmap, system24
- **All blog posts** (10+): atari, attention, bus, gfs, imagenet, module-criteria, optimizing-sveltekit, platonic, spatial-page-transitions, test, unix-system, yolo
- **All images/photos**: `src/content/images/` (30+ photos for `/pics` page)
- **All files/**: 28 static files (thumbnails, mockups, badges)
- **`src/routes/pics/`**: Removed entire route
- **`static/88x31.png`**: Removed

## Content Added

- **`src/content/projects/0trace/`**: NIST-compliant bootable ISO for secure disk wiping
- **`src/content/projects/lisa/`**: Lightweight remote config/feature flag service
- **`src/content/projects/tccs/`**: Backend web app with jOOQ/PostgreSQL
