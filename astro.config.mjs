// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

const repo = 'https://github.com/partita-notation/partita';

// https://astro.build/config
export default defineConfig({
	site: 'https://partita-notation.github.io',
	integrations: [
		starlight({
			title: 'Partita',
			description:
				'Partita is a free, open source music notation editor for arrangers and composers. Free, forever.',
			logo: { src: './src/assets/logo.png', alt: '' },
			favicon: '/favicon.png',
			customCss: ['./src/styles/custom.css'],
			components: { Head: './src/components/Head.astro' },
			social: [{ icon: 'github', label: 'GitHub', href: repo }],
			editLink: {
				baseUrl: 'https://github.com/partita-notation/partita-notation.github.io/edit/main/',
			},
			lastUpdated: true,
			// English at the root, Spanish under /es/. Pages not translated yet
			// fall back to English with a notice.
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				es: { label: 'Español', lang: 'es' },
			},
			plugins: [
				starlightBlog({
					prefix: 'news',
					title: { en: 'News', es: 'Noticias' },
					authors: {
						team: { name: 'The Partita team', url: repo },
					},
				}),
			],
			sidebar: [
				{ label: 'Download', translations: { es: 'Descargar' }, slug: 'download' },
				{
					label: 'User guide',
					translations: { es: 'Guía de uso' },
					items: [
						{ slug: 'guide/basics' },
						{ slug: 'guide/entering-music' },
						{ slug: 'guide/editing' },
						{ slug: 'guide/structure' },
						{ slug: 'guide/staves' },
						{ slug: 'guide/texts' },
						{ slug: 'guide/lyrics' },
						{ slug: 'guide/playback' },
						{ slug: 'guide/shortcuts' },
					],
				},
				{
					label: 'Project',
					translations: { es: 'Proyecto' },
					items: [
						{ slug: 'project/roadmap' },
						{ slug: 'project/contributing' },
						{ slug: 'project/credits' },
					],
				},
				{ label: 'Support Partita', translations: { es: 'Apoya Partita' }, slug: 'support' },
			],
		}),
	],
});
