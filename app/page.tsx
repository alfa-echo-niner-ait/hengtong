// import Image from "next/image";
import HeroSection from "@/components/blocks/home/hero_section"
import StatsSection from "@/components/blocks/home/stats_section"
import FeaturesSection from "@/components/blocks/home/features_section"
import AboutSection from "@/components/blocks/home/about_section"
import FAQSection from "@/components/blocks/home/faq_section"
import ProductSection from "@/components/blocks/home/product_section"
import Footer from "@/components/blocks/layout/footer"
import Header from "@/components/blocks/layout/header"

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <AboutSection />
      <ProductSection />
      <FAQSection />
      <Footer />
    </>
  )
}