import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import ProductList from "@/components/blocks/products/product_list";
import { BreadcrumbSection } from "@/components/blocks/layout/breadcrumb";

export default function Home() {
	return (
		<>
			<Header />
			<BreadcrumbSection section_name="Products" />
			<ProductList />
			<Footer />
		</>
	);
}
