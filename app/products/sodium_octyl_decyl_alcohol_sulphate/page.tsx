import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import { ProductCarousel } from "@/components/blocks/products/product_carousel";
import { BreadcrumbProduct } from "@/components/blocks/products/breadcrumb_product";
import { IndicatorsTable } from "@/components/blocks/products/product_10/indicators_table";
import { PNA } from "@/components/blocks/products/product_10/pna";
import { ProductInfo } from "@/components/blocks/products/product_10/product_info";

export const metadata: Metadata = {
	title: "Sodium Octyl Decyl Alcohol Sulphate | Hengtong Trading",
	description:
		"Sodium Octyl Decyl Alcohol Sulphate is a versatile surfactant used in various industrial applications, including cleaning, emulsification, and personal care products. Known for its excellent wetting and dispersing properties, it is suitable for both neutral and alkaline media.",
	keywords: [
		"Sodium Octyl Decyl Alcohol Sulphate",
		"Surfactant",
		"Emulsifier",
		"Cleaning Agent",
		"Industrial Chemicals",
		"Chemical Manufacturing",
		"Chemical Industry",
		"Chemical Products",
	],
	openGraph: {
		title: "Sodium Octyl Decyl Alcohol Sulphate | Hengtong Trading",
		description:
			"Sodium Octyl Decyl Alcohol Sulphate is a versatile surfactant used in various industrial applications, including cleaning, emulsification, and personal care products. Known for its excellent wetting and dispersing properties, it is suitable for both neutral and alkaline media.",
		url: "https://hengtongtrading.com/products/sodium_octyl_decyl_alcohol_sulphate",
		siteName: "Hengtong Trading",
		images: [
			{
				url: "https://hengtongtrading.com/og/product-10.png",
				width: 1200,
				height: 630,
				alt: "Sodium Octyl Decyl Alcohol Sulphate - Hengtong Trading",
			},
		],
	},
};

export default function Home() {
	return (
		<>
			<Header />
			<div className="relative mx-auto max-w-5xl px-6">
				<BreadcrumbProduct product_name="Sodium Octyl Decyl Alcohol Sulphate" />
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
