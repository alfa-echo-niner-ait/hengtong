import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
	title: "Hengtong Trading",
	description:
		"Founded in 2016, Hengtong Jinhang Co., Ltd. is a leading manufacturer specializing in Sodium Lauryl Sulfate (SLS), Alpha Olefin Sulfonate (AOS), and PVC additives. Our production facility is located in Zibo City, Shandong Province, covering an area of 30,000 square meters, with over 100 skilled employees. Our international trade office is based in Huangdao District, Qingdao, equipped with an independent export team.",
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
