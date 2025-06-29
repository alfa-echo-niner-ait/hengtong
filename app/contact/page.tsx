import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import { BreadcrumbSection } from "@/components/blocks/layout/breadcrumb";
import Contact from "@/components/contact/contact";

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
