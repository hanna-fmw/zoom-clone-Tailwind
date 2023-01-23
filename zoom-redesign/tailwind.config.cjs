/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			mobile: '480px',
			tablet: '640px',
			laptop: '1024px',
		},
		extend: {
			fontFamily: {
				robotoMono: ['Roboto Mono', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
				arial: ['Arial', 'sans-serif'],
			},
			colors: {
				zoomBlue: '#0b5cff',
				navLinkColor: '#747487',
				dark: '#232333',
				darkText: '#00031F',
				hoverBlue: '#0050F0',
				hoverLightBlue: '#E8EEFF',
				lightGreyBg: '#F7F7F8',
				darkBlueBg: '#00053D',
				lightGreyText: '#b1b8c9',
				greenPillButton: '#00E0DB',
				greenPillButtonHover: '#00c9c5',
				thinBlueBorder: '#71A0EC',
			},
		},
	},
	plugins: [],
}
