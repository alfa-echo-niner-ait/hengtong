import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductList() {
	return (
		<section className="overflow-hidden">
			<div className="relative mx-auto max-w-5xl px-6">
				<h2 className="text-4xl text-primary/85 font-medium tracking-tight sm:text-4xl lg:text-5xl mb-8 text-center">
					Our Products
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-5">
					{products.map((product) => (
						<Link
							key={product.id}
							href={product.url}
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
								<CardFooter className="p-4 bg-white dark:bg-gray-900 rounded-b-lg flex flex-col items-center text-center">
									<h3 className="text-lg font-medium group-hover:text-primary transition-colors">
										{product.name}
									</h3>
									<p className="text-sm mt-2 text-muted-foreground transition-colors group-hover:text-black dark:group-hover:text-white">
										{product.description}
									</p>
								</CardFooter>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
