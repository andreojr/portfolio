/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx"],
	theme: {
		fontFamily: {
			"poppins": ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				"primary": "#0081C9",
				"secondary": "#FFC93C",
				"dark": "#222222"
			},
		},
	},
	plugins: [],
};

