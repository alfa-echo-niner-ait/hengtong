import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import { BreadcrumbSection } from "@/components/blocks/layout/breadcrumb";
import AboutSection from "@/components/blocks/home/about_section";

export default function Home() {
    return (
        <>
            <Header />
            <BreadcrumbSection section_name="About Us" />
            <AboutSection />
            <Footer />
        </>
    );
}
