// import Image from "next/image";
import HeroSection from "@/components/blocks/home/hero_section"
import StatsSection from "@/components/blocks/home/stats_section"
import FeaturesSection from "@/components/blocks/home/features_section"
import FooterSection from "@/components/blocks/home/footer_section"
import AboutSection from "@/components/blocks/home/about_section"
import FAQSection from "@/components/blocks/home/faq_section"
import { ProductSection } from "@/components/blocks/home/product_section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <AboutSection />
      <ProductSection />
      <FAQSection />
      <FooterSection />
    </>
  )
}