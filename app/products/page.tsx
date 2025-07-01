import type { Metadata } from "next";
import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import ProductList from "@/components/blocks/products/product_list";
import { BreadcrumbSection } from "@/components/blocks/layout/breadcrumb";

export const metadata: Metadata = {
	title: "Our Products | Hengtong Trading",
	description:
		"Explore our range of high-quality Sodium Lauryl Sulfate (SLS), Alpha Olefin Sulfonate (AOS), and PVC additives. Find the right products for your needs.",
	keywords: [
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
		"PVC Additives",
		"Surfactants",
		"Industrial Chemicals",
		"Chemical Suppliers",
		"Chemical Products",
	],
};

export default function Home() {
	return (
		<>
			<Header />
			<BreadcrumbSection section_name="Products" />
			<ProductList />
			<Footer />
		</>
	);
}
