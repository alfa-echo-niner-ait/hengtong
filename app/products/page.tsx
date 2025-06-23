import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const products = [
	{
		name: "Sodium Lauryl Sulfate",
		image: "/products/sodium_lauryl_sulfate.jpg",
		slug: "sodium-lauryl-sulfate",
	},
	{
		name: "Sodium alpha-olefin Sulfonate",
		image: "/products/alpha_olefin_sulfonate.jpg",
		slug: "sodium-alpha-olefin-sulfonate",
	},
	{
		name: "Sodium Dodecyl Sulfate",
		image: "/products/sodiun_dodecyl_sulfate.jpg",
		slug: "sodium-dodecyl-sulfate",
	},
	{
		name: "High Activity Color Stain Remover Stick",
		image: "/products/sodium_lauryl_sulfate_blue.jpg",
		slug: "stain-remover-stick",
	},
	{
		name: "Gypsum Board Foaming Agent",
		image: "/products/foaming-agent.jpg",
		slug: "foaming-agent",
	},
	{
		name: "Potassium Dodecyl Sulfate",
		image: "/products/potassium-dodecyl-sulfate.jpg",
		slug: "potassium-dodecyl-sulfate",
	},
];

export default function Home() {
	return (
		<section className="py-12 md:py-16 lg:py-20">
			<div className="mx-auto max-w-5xl px-4 md:px-6">
				<h2 className="text-4xl font-medium tracking-tight sm:text-4xl lg:text-5xl mb-8 text-center">
					Our Products
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{products.map((product) => (
						<Link
							key={product.slug}
							href={`/products/${product.slug}`}
							className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg transition-all"
							aria-label={`View ${product.name} product details`}
						>
							<Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-0 shadow-sm group-hover:shadow-md">
								<CardContent className="p-0">
									<div className="aspect-square relative overflow-hidden rounded-t-lg">
										<Image
											src={product.image}
											alt={product.name}
											fill
											className="object-cover transition-transform duration-500 group-hover:scale-105"
											sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
											priority={false}
										/>
									</div>
								</CardContent>
								<CardFooter className="p-4 bg-white dark:bg-gray-900 rounded-b-lg">
									<h3 className="text-lg font-medium text-center w-full group-hover:text-primary transition-colors">
										{product.name}
									</h3>
								</CardFooter>
							</Card>
						</Link>
					))}
				</div>

				<div className="mt-10 text-center">
					<Button asChild size="lg" className="px-8 py-6 text-lg">
						<Link href="#">View All Products</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
