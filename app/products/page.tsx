import Header from "@/components/blocks/layout/header";
import Footer from "@/components/blocks/layout/footer";
import ProductList from "@/components/blocks/products/product_list";

export default function Home() {
	return (
		<>
			<Header />
			<ProductList />
			<Footer />
		</>
	);
}
