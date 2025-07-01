import type { Metadata } from "next";

import HeroSection from "@/components/blocks/home/hero_section";
import StatsSection from "@/components/blocks/home/stats_section";
import FeaturesSection from "@/components/blocks/home/features_section";
import AboutSection from "@/components/blocks/home/about_section";
import FAQSection from "@/components/blocks/home/faq_section";
import ProductSection from "@/components/blocks/home/product_section";
import Footer from "@/components/blocks/layout/footer";
import Header from "@/components/blocks/layout/header";
import { ImageSlider } from "@/components/blocks/home/image_slider";
import Testimonials from "@/components/blocks/home/testimonials";

export const metadata: Metadata = {
	metadataBase: new URL("https://hengtongtrading.com"),
	alternates: {
		canonical: "https://hengtongtrading.com/",
	},
	title:
		"Hengtong Trading - Top Manufacturer of SLS, AOS & PVC Additives from China",
	description:
		"Leading manufacturer specializing in Sodium Lauryl Sulfate (SLS), Alpha Olefin Sulfonate (AOS), and PVC additives. Our production facility is in Shandong, China",
	keywords: [
		// General Company & Industry
		"Hengtong Trading",
		"Hengtong Jinhang Co., Ltd.",
		"Chinese chemical exporter",
		"surfactant manufacturer",
		"chemical raw materials",
		"detergent ingredients",
		"cleaning chemicals",
		"PVC additives",
		"personal care ingredients",
		// Product-specific keywords
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
		// Functional Keywords
		"foaming agent",
		"wetting agent",
		"anionic surfactant",
		"biodegradable surfactant",
		"emulsifier",
		"cleansing agent",
		"detergent raw materials",
		"industrial surfactants",
		"cosmetic ingredients",
		"cleaning product chemicals",
	],
};

export default function Home() {
	return (
		<>
			<Header />
			<HeroSection />
			<StatsSection />
			<FeaturesSection />
			<AboutSection />
			<ProductSection />
			<Testimonials />
			<FAQSection />
			<ImageSlider />
			<Footer />
		</>
	);
}
