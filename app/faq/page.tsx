import type { Metadata } from "next";
import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import { BreadcrumbSection } from "@/components/blocks/layout/breadcrumb";
import FAQSection from "@/components/blocks/home/faq_section";
import FacebookPagePlugin from "@/components/blocks/home/facebook_page";

export const metadata: Metadata = {
    title: "FAQs | Hengtong Trading",
    description: "Frequently Asked Questions about our products and services. Find answers to common queries regarding SLS, AOS, and PVC additives.",
};

export default function Home() {
    return (
        <>
            <Header />
            <BreadcrumbSection section_name="FAQs" />
            <div className="m-4"></div>
            <FAQSection />
            <div className="m-2"></div>
            <FacebookPagePlugin />
            <Footer />
        </>
    );
}
