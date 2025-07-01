import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import { ProductCarousel } from "@/components/blocks/products/product_carousel";
import { BreadcrumbProduct } from "@/components/blocks/products/breadcrumb_product";
import {
	PowderNeedleTable,
	ToothpaseGradeTable,
	LatexGradeTable,
} from "@/components/blocks/products/product_1/indicators_table";
import { PNA } from "@/components/blocks/products/product_1/pna";
import { ProductInfo } from "@/components/blocks/products/product_1/product_info";

export const metadata: Metadata = {
	title: "Sodium Lauryl Sulfate | Hengtong Trading",
	description:
		"Sodium Lauryl Sulfate (SLS) is an anionic surfactant widely used in personal care products, detergents, and industrial applications. Known for its excellent foaming and cleansing properties, SLS is a key ingredient in shampoos, toothpastes, and body washes. It effectively removes dirt and oil, making it a popular choice in formulations requiring strong cleaning action.",
	keywords: [
		"Sodium Lauryl Sulfate",
		"Anionic Surfactant",
		"Personal Care Products",
		"Detergents",
		"Industrial Applications",
		"Foaming Agent",
		"Cleansing Agent",
		"Chemical Manufacturing",
		"Chemical Industry",
		"Chemical Products",
	],
	openGraph: {
		title: "Sodium Lauryl Sulfate | Hengtong Trading",
		description:
			"Sodium Lauryl Sulfate (SLS) is an anionic surfactant widely used in personal care products, detergents, and industrial applications. Known for its excellent foaming and cleansing properties, SLS is a key ingredient in shampoos, toothpastes, and body washes. It effectively removes dirt and oil, making it a popular choice in formulations requiring strong cleaning action.",
		url: "https://hengtongtrading.com/products/sodium_lauryl_sulfate",
		siteName: "Hengtong Trading",
		images: [
			{
				url: "https://hengtongtrading.com/og/product-1.png",
				width: 1200,
				height: 630,
				alt: "Sodium Lauryl Sulfate - Hengtong Trading",
			},
		],
	},
};

export default function Home() {
	return (
		<>
			<Header />
			<div className="relative mx-auto max-w-5xl px-6">
				<BreadcrumbProduct product_name="Sodium Lauryl Sulfate" />
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
								<PowderNeedleTable />
								<br />
								<ToothpaseGradeTable />
								<br />
								<LatexGradeTable />
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
