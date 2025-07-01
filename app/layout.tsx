import type { Metadata } from "next";
import "./globals.css";

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
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
