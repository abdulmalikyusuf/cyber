import {
	JetBrains_Mono as FontMono,
	Inter as FontSans,
} from "next/font/google";
import localFont from "next/font/local";

export const fontInter = localFont({
	src: "../public/font/Inter.ttf",
	variable: "--font-inter",
});
export const fontSFPro = localFont({
	src: "../public/font/SF Pro Display/regular.otf",
	variable: "--font-SFPro",
});

// const inter = Inter({ subsets: ['latin'] })

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const fontMono = FontMono({
	subsets: ["latin"],
	variable: "--font-mono",
});
