import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				'secondary-white': '#f7f7f6',
				'accent-pink': '#ff005d',
				'accent-dark-pink': '#cf004b',
				'secondary-gray': '#656463',
				'secondary-dark-gray': '#383737',
				'primary-gray': '#342e2e',
				'spanish-blue': '#1e1d2b',
				'cool-black': '#1e1d2b',
				'accent-blue': '#758afd',
				'soft-blue': '#91a1d6',
				'primary-black': '#1b1919',
				'primary-blue': '#100e19',
				'light-salmon': '#fda471',
				charm: '#d57880'
			}
		}
	},
	plugins: []
}
export default config
