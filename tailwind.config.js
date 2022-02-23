module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			primary: '#038082',
			primaryLight: '#4fa6a8',
			primaryLighter:'#cde6e6',
			primaryBg:'#e6f2f3',
			primaryDark: '#026668',
			secondary: '#fb8500',
			secondaryLight: '#fb911a',
			secondaryDark: '#c96a00',
			secondaryLighter: '#fff3e6',
			white: '#fff',
			border:'#ECEEF4',
			black: '#000',
			link:'#71737B',
			footer:'#fff3e6',
			background:'#F6F9FC',
			transparent:'transparent'
		},
		extend: {
			backgroundImage: {
				'end-hero': "url('/public/post-image/end.png')",
			},
		},
	},
	plugins: [],
};