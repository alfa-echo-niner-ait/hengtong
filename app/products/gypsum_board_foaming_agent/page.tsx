import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import { ProductCarousel } from "@/components/blocks/products/product_carousel";
import { IndicatorsTable } from "@/components/blocks/products/product_5/indicators_table";
import { PNA } from "@/components/blocks/products/product_5/pna";
import { BreadcrumbProduct } from "@/components/blocks/products/breadcrumb_product";
import { ProductInfo } from "@/components/blocks/products/product_5/product_info";

export const metadata: Metadata = {
	title: "Gypsum Board Foaming Agent | Hengtong Trading",
	description: "Enhance the strength, insulation, and performance of gypsum boards with our reliable foaming solutions for construction and building materials.",
	keywords: [
		"Gypsum Board Foaming Agent",
		"Foaming Agent for Gypsum Boards",
		"Construction Materials",
		"Building Materials",
		"Insulation Solutions",
		"Strength Enhancement",
		"Foaming Solutions",
	],
	openGraph: {
		title: "Gypsum Board Foaming Agent | Hengtong Trading",
		description: "Enhance the strength, insulation, and performance of gypsum boards with our reliable foaming solutions for construction and building materials.",
		url: "https://hengtongtrading.com/products/gypsum_board_foaming_agent",
		siteName: "Hengtong Trading",
		images: [
			{
				url: "https://hengtongtrading.com/og/product-5.png",
				width: 1200,
				height: 630,
				alt: "Gypsum Board Foaming Agent - Hengtong Trading",
			},
		]},
};

export default function Home() {
	return (
		<>
			<Header />
			<div className="relative mx-auto max-w-5xl px-6">
				<BreadcrumbProduct product_name="Gypsum Board Foaming Agent" />
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
