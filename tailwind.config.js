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
			animation: {
				slide: "slide .5s",
			},
			keyframes: {
				slide: {
					"0%": {
						transform: "translateX(100%)",
					},
					"100%": {
						transform: "translateX(0)",
					}
				}
			},
			aspectRatio: {
				certificate: "611 / 433",
			}
		},
	},
	plugins: [],
};

