import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				secondary: 'rgba(var(--color-cool-black),1)',
				accent: {
					DEFAULT: 'rgba(var(--color-accent-blue),1)',
					salmon: 'rgba(var(--color-light-salmon),1)',
					light: 'rgba(var(--color-accent-blue),0.5)'
				},

				background: 'rgba(var(--color-background),1)',
				foreground: 'rgba(var(--color-foreground),1)'
			}
		}
	},
	plugins: []
}
export default config
