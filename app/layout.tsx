import type { Metadata, Viewport } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { fontInter, fontSFPro } from "@/lib/fonts";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
	// metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		"Next.js",
		"Tailwind CSS",
		"Server Components",
		"Server Actions",
		"Cyber",
		"Cyber E-commerce store",
		"Consumer Tech",
		"Apple",
		"Samsung",
	],
	authors: [
		{
			name: "abdulmalikyusuf",
			url: "https://github.com/abdulmalikyusuf",
		},
	],
	creator: "abdulmalikyusuf",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [`${siteConfig.url}/og.jpg`],
		creator: "abdulmalikyusuf",
	},
	icons: {
		icon: "/favicon.ico",
	},
};
export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${fontInter.variable} ${fontSFPro.variable}`}
		>
			<body className="max-w-[1440px] mx-auto flex flex-col">
				<Header />
				<div className="flex-1">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
