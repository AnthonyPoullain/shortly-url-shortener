/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-cyan': 'var(--color-primary-cyan)',
				'primary-violet': 'var(--color-primary-violet)',
				secondary: 'var(--color-secondary)',
				'neutral-gray': 'var(--color-neutral-gray)',
				'neutral-grayish-violet': 'var(--color-neutral-grayish-violet)',
				'neutral-dark-blue': 'var(--color-neutral-dark-blue)',
				'neutral-dark-violet': 'var(--color-neutral-dark-violet)',
			},
			backgroundImage: {
				'shorten-desktop': "url('src/assets/bg-shorten-desktop.svg')",
				'shorten-mobile': "url('src/assets/bg-shorten-mobile.svg')",
				'boost-desktop': "url('src/assets/bg-boost-desktop.svg')",
				'boost-mobile': "url('src/assets/bg-boost-mobile.svg')",
			},
		},
	},
	plugins: [],
};
