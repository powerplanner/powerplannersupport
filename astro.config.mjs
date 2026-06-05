// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Power Planner Support',
			favicon: '/PowerPlanner.ico',
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'FAQ',
					items: [{ autogenerate: { directory: 'faq' } }],
				},
				{
					label: 'Schedule',
					items: [{ autogenerate: { directory: 'schedule' } }],
				},
				{
					label: 'Tasks & events',
					items: [{ autogenerate: { directory: 'tasks-and-events' } }],
				},
				{
					label: 'Classes',
					items: [{ autogenerate: { directory: 'classes' } }],
				},
				{
					label: 'Grades',
					items: [{ autogenerate: { directory: 'grades' } }],
				},
				{
					label: 'Years & semesters',
					items: [{ autogenerate: { directory: 'years-and-semesters' } }],
				},
				{
					label: 'Miscellaneous',
					items: [{ autogenerate: { directory: 'misc' } }],
				},
			],
		}),
	],
});
