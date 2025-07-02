import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import TawkToWidget from "@/components/blocks/layout/TawkToWidget";

export const metadata: Metadata = {
	authors: [{ name: 'Ayub Ali Emon', url: 'http://github.com/alfa-echo-niner-ait' }],
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	openGraph: {
			title: "Hengtong Trading",
			description:
				"Leading manufacturer specializing in Sodium Lauryl Sulfate (SLS), Alpha Olefin Sulfonate (AOS), and PVC additives. Our production facility is in Shandong, China",
			url: "https://hengtongtrading.com",
			type: "website",
			siteName: "Hengtong Trading",
			images: [
				{
					url: "https://hengtongtrading.com/og/main.png",
					width: 1200,
					height: 630,
					alt: "Hengtong Trading",
				},
			],
		},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
			</head>
			<body>
				{children}
				<TawkToWidget />
			</body>
			<GoogleAnalytics gaId="G-7FMH3XQZLW" />
		</html>
	);
}
