import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title:
		"Hengtong Trading | Hengtong Jinhang Chemical Co., Ltd. | Leading manufacturer specializing in Sodium Lauryl Sulfate (SLS), Alpha Olefin Sulfonate (AOS), and PVC additives",
	description:
		"Leading manufacturer specializing in Sodium Lauryl Sulfate (SLS), Alpha Olefin Sulfonate (AOS), and PVC additives. Our production facility is located in Zibo City, Shandong Province, China",
	keywords: [
		// General Company & Industry
		"Hengtong Trading",
		"Hengtong Jinhang Co., Ltd.",
		"Chinese chemical exporter",
		"surfactant manufacturer",
		"chemical raw materials",
		"detergent ingredients",
		"cleaning chemicals",
		"PVC additives",
		"personal care ingredients",
		// Product-specific keywords
		"Sodium Lauryl Sulfate",
		"Sodium Dodecyl Sulfate",
		"SLS",
		"Sodium Alpha-olefin Sulfonate",
		"AOS",
		"Sodium N-Decyl Sulfate",
		"Sodium Isooctanol Sulfate",
		"Sodium Octyl Decyl Alcohol Sulphate",
		"Positive Octyl Sodium Sulfate",
		"Magnesium Dodecyl Sulfate",
		"Potassium Dodecyl Sulfate",
		"Lithium Dodecyl Sulfate",
		"Gypsum Board Foaming Agent",
		"Color Stain Remover",
		"High Activity Color Stain Remover",
		// Functional Keywords
		"foaming agent",
		"wetting agent",
		"anionic surfactant",
		"biodegradable surfactant",
		"emulsifier",
		"cleansing agent",
		"detergent raw materials",
		"industrial surfactants",
		"cosmetic ingredients",
		"cleaning product chemicals",
	],
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
