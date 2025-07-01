import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import { ProductCarousel } from "@/components/blocks/products/product_carousel";
import { BreadcrumbProduct } from "@/components/blocks/products/breadcrumb_product";
import { IndicatorsTable } from "@/components/blocks/products/product_4/indicators_table";
import { PNA } from "@/components/blocks/products/product_4/pna";
import { ProductInfo } from "@/components/blocks/products/product_4/product_info";

export const metadata: Metadata = {
	title: "High Activity Color Stain Remover | Hengtong Trading",
	description:
		"High Activity Color Stain Remover is a powerful cleaning agent designed to remove tough stains from various surfaces. Ideal for both industrial and household use.",
	keywords: [
		"High Activity Color Stain Remover",
		"Stain Remover",
		"Cleaning Agent",
		"Surface Cleaner",
		"Industrial Cleaning",
		"Household Cleaning",
		"Powerful Stain Removal",
		"Color Stain Remover",
	],
	openGraph: {
		title: "High Activity Color Stain Remover | Hengtong Trading",
		description:
			"High Activity Color Stain Remover is a powerful cleaning agent designed to remove tough stains from various surfaces. Ideal for both industrial and household use.",
		url: "https://hengtongtrading.com/products/high_activity_color_stain_remover",
		siteName: "Hengtong Trading",
		images: [
			{
				url: "https://hengtongtrading.com/og/product-4.png",
				width: 1200,
				height: 630,
				alt: "High Activity Color Stain Remover - Hengtong Trading",
			},
		],
	},
};

export default function Home() {
	return (
		<>
			<Header />
			<div className="relative mx-auto max-w-5xl px-6">
				<BreadcrumbProduct product_name="High Activity Color Stain Remover" />
				<ProductInfo />
				<Tabs defaultValue="table" className="max-w-5xl mx-auto my-3">
					<div className="flex justify-center">
						<TabsList>
							<TabsTrigger value="table">Technical Indicators</TabsTrigger>
							<TabsTrigger value="description">
								Performance and Applications
							</TabsTrigger>
						</TabsList>
					</div>
					<TabsContent value="table">
						<Card className="my-3">
							<CardContent className="p-6">
								<IndicatorsTable />
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="description">
						<PNA />
					</TabsContent>
				</Tabs>
				<ProductCarousel />
			</div>
			<Footer />
		</>
	);
}
