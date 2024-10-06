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
				primary: {
					DEFAULT: 'rgba(var(--color-accent-blue),1)',
					light: 'rgba(var(--color-accent-blue),0.5)'
				},
				black: {
					DEFAULT: 'rgba(0,0,0,1)',
					cool: 'rgba(var(--color-cool-black),1)'
				},
				secondary: 'rgba(var(--color-light-salmon),1)',
				background: 'rgba(var(--color-background),1)',
				foreground: 'rgba(var(--color-foreground),1)'
			}
		}
	},
	plugins: []
}
export default config
