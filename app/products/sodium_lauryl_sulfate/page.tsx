import type { Metadata } from "next";
import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import { ProductCarousel } from "@/components/blocks/products/product_carousel";

export const metadata: Metadata = {
	title: "Sodium Lauryl Sulfate | Hengtong Trading",
	description:
		"Sodium Lauryl Sulfate (SLS) is an anionic surfactant widely used in personal care products, detergents, and industrial applications. Known for its excellent foaming and cleansing properties, SLS is a key ingredient in shampoos, toothpastes, and body washes. It effectively removes dirt and oil, making it a popular choice in formulations requiring strong cleaning action.",
};

export default function Home() {
	return (
		<>
			<Header />
			<ProductCarousel />
			<Footer />
		</>
	);
}
