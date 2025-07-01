import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import { ProductCarousel } from "@/components/blocks/products/product_carousel";
import { BreadcrumbProduct } from "@/components/blocks/products/breadcrumb_product";
import { IndicatorsTable } from "@/components/blocks/products/product_2/indicators_table";
import { PNA } from "@/components/blocks/products/product_2/pna";
import { ProductInfo } from "@/components/blocks/products/product_2/product_info";

export const metadata: Metadata = {
	title: "Sodium Alpha-olefin Sulfonate | Hengtong Trading",
	description:
		"Sodium Alpha-olefin Sulfonate is a mild, biodegradable surfactant used in personal care products. It provides excellent foaming and cleansing properties while being gentle on the skin.",
	keywords: [		"Sodium Alpha-olefin Sulfonate",
		"Surfactant",
		"Biodegradable Surfactant",
		"Personal Care Products",
		"Foaming Agent",
		"Cleansing Agent",
		"Skin Care",
		"Cosmetic Ingredients",
	],
	openGraph: {
		title: "Sodium Alpha-olefin Sulfonate | Hengtong Trading",
		description:
			"Sodium Alpha-olefin Sulfonate is a mild, biodegradable surfactant used in personal care products. It provides excellent foaming and cleansing properties while being gentle on the skin.",
		url: "https://hengtongtrading.com/products/sodium_alpha_olefin_sulfonate",
		siteName: "Hengtong Trading",
		images: [
			{
				url: "https://hengtongtrading.com/og/product-2.png",
				width: 1200,
				height: 630,
				alt: "Sodium Alpha-olefin Sulfonate - Hengtong Trading",
			},
		],
	},
};

export default function Home() {
	return (
		<>
			<Header />
			<div className="relative mx-auto max-w-5xl px-6">
				<BreadcrumbProduct product_name="Sodium Alpha-olefin Sulfonate" />
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
