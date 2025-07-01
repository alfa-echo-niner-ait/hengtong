import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import { ProductCarousel } from "@/components/blocks/products/product_carousel";
import { BreadcrumbProduct } from "@/components/blocks/products/breadcrumb_product";
import { IndicatorsTable } from "@/components/blocks/products/product_8/indicators_table";
import { PNA } from "@/components/blocks/products/product_8/pna";
import { ProductInfo } from "@/components/blocks/products/product_8/product_info";

export const metadata: Metadata = {
	title: "Magnesium Dodecyl Sulfate | Hengtong Trading",
	description:
		"Magnesium Dodecyl Sulfate is a magnesium-based surfactant used in specialized cleaning formulations. It is known for its excellent emulsifying and wetting properties.",
	keywords: [		"Magnesium Dodecyl Sulfate",
		"Surfactant",
		"Emulsifier",
		"Cleaning Agent",
		"Industrial Chemicals",
		"Chemical Manufacturing",
		"Chemical Industry",
		"Chemical Products",
	],
	openGraph: {
		title: "Magnesium Dodecyl Sulfate | Hengtong Trading",
		description:
			"Magnesium Dodecyl Sulfate is a magnesium-based surfactant used in specialized cleaning formulations. It is known for its excellent emulsifying and wetting properties.",
		url: "https://hengtongtrading.com/products/magnesium_dodecyl_sulfate",
		siteName: "Hengtong Trading",
		images: [
			{
				url: "https://hengtongtrading.com/og/product-8.png",
				width: 1200,
				height: 630,
				alt: "Magnesium Dodecyl Sulfate - Hengtong Trading",
			},
		],
	},
};

export default function Home() {
	return (
		<>
			<Header />
			<div className="relative mx-auto max-w-5xl px-6">
				<BreadcrumbProduct product_name="Magnesium Dodecyl Sulfate" />
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
