import type { Metadata } from "next";
import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import { BreadcrumbSection } from "@/components/blocks/layout/breadcrumb";
import FAQSection from "@/components/blocks/home/faq_section";

export const metadata: Metadata = {
	title: "FAQs | Hengtong Trading",
	description: "Frequently Asked Questions about our products and services. Find answers to common queries regarding SLS, AOS, and PVC additives.",
};

export default function Home() {
    return (
        <>
            <Header />
            <BreadcrumbSection section_name="FAQs" />
            <FAQSection />
            <Footer />
        </>
    );
}
