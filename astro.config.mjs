// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repo = 'https://github.com/dacapo-editor/dacapo';

// https://astro.build/config
export default defineConfig({
	site: 'https://dacapo-editor.github.io',
	integrations: [
		starlight({
			title: 'Da Capo',
			description:
				'Da Capo is a free, open source music notation editor that feels like a word processor.',
			logo: { src: './src/assets/logo.png', alt: '' },
			favicon: '/favicon.png',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: repo }],
			editLink: {
				baseUrl: 'https://github.com/dacapo-editor/dacapo-editor.github.io/edit/main/',
			},
			lastUpdated: true,
			sidebar: [
				{ label: 'Download', slug: 'download' },
				{
					label: 'User guide',
					items: [
						{ slug: 'guide/basics' },
						{ slug: 'guide/entering-music' },
						{ slug: 'guide/editing' },
						{ slug: 'guide/playback' },
						{ slug: 'guide/shortcuts' },
					],
				},
				{
					label: 'Project',
					items: [
						{ slug: 'project/roadmap' },
						{ slug: 'project/contributing' },
						{ slug: 'project/credits' },
					],
				},
			],
		}),
	],
});
