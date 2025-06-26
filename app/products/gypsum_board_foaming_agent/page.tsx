import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import { ProductCarousel } from "@/components/blocks/products/product_carousel";
import { IndicatorsTable } from "@/components/blocks/products/product_5/indicators_table";
import { PNA } from "@/components/blocks/products/product_5/pna";
import { BreadcrumbProduct } from "@/components/blocks/products/breadcrumb_product";
import { ProductInfo } from "@/components/blocks/products/product_5/product_info";

export const metadata: Metadata = {
	title: "Gypsum Board Foaming Agent | Hengtong Trading",
	description: "Discover high-quality gypsum board foaming agents from Hengtong Trading. Enhance the strength, insulation, and performance of gypsum boards with our reliable foaming solutions for construction and building materials."
};

export default function Home() {
	return (
		<>
			<Header />
			<BreadcrumbProduct product_name="Gypsum Board Foaming Agent" />
			<ProductInfo />
			<Tabs defaultValue="table" className="max-w-5xl mx-auto my-3">
				<div className="flex justify-center">
					<TabsList>
						<TabsTrigger value="table">Technical Indicators</TabsTrigger>
						<TabsTrigger value="description">Performance and Applications</TabsTrigger>
					</TabsList>
				</div>
				<TabsContent value="table">
					<IndicatorsTable />
				</TabsContent>
				<TabsContent value="description">
					<PNA />
				</TabsContent>
			</Tabs>
			<ProductCarousel />
			<Footer />
		</>
	);
}
