import type { Config } from "tailwindcss";
import colors, { white as _white } from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				// SHADCN-UI
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
					//CUSTOM
					charcoal: "#2E2E2E",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				//CUSTOM
				main: {
					black: "#000",
					white: "#FFF",
					orange: "#FFB547",
				},
				"space-cadet": "#17183B",
			},
			borderRadius: {
				// lg: "var(--radius)",
				// md: "calc(var(--radius) - 2px)",
				// sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"hero-gradient":
					"linear-gradient(91deg, #211c24 0.64%, #211c24 101%)",
				"sale-banner-gradient":
					"linear-gradient(100deg, #2E2E2E 42.36%, #000 98.65%)",
			},
			padding: {
				160: "160px",
			},
			margin: {
				22: "88px",
				104: "104px",
				160: "160px",
			},
			borderWidth: {
				0.5: "0.5px",
			},
			fontFamily: {
				sf: ["var(--font-SFPro)", "serif"],
				inter: ["var(--font-inter)", "serif"],
			},
			fontSize: {
				15: "15px",
				34: "34px",
			},
			textWrap: {
				DEFAULT: "nowrap",
				wrap: "wrap",
				balance: "balance",
				pretty: "pretty",
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-wrap": (value) => ({ textWrap: value }),
				},
				{ values: theme("textWrap") }
			);
		}),
		require("tailwindcss-animate"),
	],
};
export default config;
