import type { Metadata } from "next";
import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import { BreadcrumbSection } from "@/components/blocks/layout/breadcrumb";
import AboutSection from "@/components/blocks/home/about_section";
import { ImageSlider } from "@/components/blocks/home/image_slider";
import FacebookPagePlugin from "@/components/blocks/home/facebook_page";

export const metadata: Metadata = {
    title:
        "About Us | Hengtong Trading",
    description:
        "Leading manufacturer specializing in Sodium Lauryl Sulfate (SLS), Alpha Olefin Sulfonate (AOS), and PVC additives. Our production facility is in Shandong, China",
};

export default function Home() {
    return (
        <>
            <Header />
            <BreadcrumbSection section_name="About Us" />
            <AboutSection />
            <FacebookPagePlugin />
            <ImageSlider />
            <Footer />
        </>
    );
}
