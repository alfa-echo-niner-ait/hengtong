import type { Metadata } from "next";
import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import { BreadcrumbSection } from "@/components/blocks/layout/breadcrumb";
import Contact from "@/components/contact/contact";

export const metadata: Metadata = {
	title: "Contact Us | Hengtong Trading",
	description:
		"Contact us today for inquiries about our Sodium Lauryl Sulfate (SLS), Alpha Olefin Sulfonate (AOS), and PVC additives.",
};

export default function Home() {
    return (
        <>
            <Header />
            <BreadcrumbSection section_name="Contact Us" />
            <Contact />
            <Footer />
        </>
    );
}
