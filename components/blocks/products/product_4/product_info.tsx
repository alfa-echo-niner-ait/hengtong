import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { InquiryButton } from "../inquiry_button";

export function ProductInfo() {
	return (
		<section className="overflow-hidden">
			<div className="p-6 my-5 bg-zinc-50">
				<div className="grid gap-8 md:grid-cols-2">
					{/* Product Image */}
					<div className="flex justify-center">
						<AspectRatio
							ratio={1 / 1}
							className="group relative max-w-5xl overflow-hidden rounded-lg border"
						>
							<div className="">
								<Image
									src="/products/high_activity_color_stain_remover.jpg"
									alt="Sodium Dodccyl Sulfate"
									fill
									sizes="(max-width: 768px) 100vw, 500px"
									className="object-cover transition-transform duration-300 group-hover:scale-110"
									priority
								/>
							</div>
						</AspectRatio>
					</div>
					{/* Product Details */}
					<div>
						<h1 className="mb-4 text-3xl font-bold tracking-tight border-b-2 border-zinc-400 pb-3">
							High Activity Color Stain Remover
						</h1>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
							<div>
								<h3 className="text-blue-950 font-semibold">Other Names</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">
									Laundry powder with color particles embellishment, Color
									active particles
								</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">
									Main Ingredients
								</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">
									Anionic surfactants, pigments
								</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">Properties</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">
									Natural flow of colored columnar particles
								</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">Classification</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">
									According to the active ingredient content can be divided
									into: 89 grade and 93 grade
									<br />
									According to the color can be divided into: blue, pink,
									orange, blue purple and so on
								</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">Characteristic</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">
									This product uses anionic surfactants as the main raw
									materials, made of different color pigments, different from
									the previous color embellishments (the main component is
									inorganic salts), this product has excellent spreading,
									wetting, and excellent washing power, added to the washing
									powder is not only the embellishment role, but also the
									corresponding synergism.
								</p>
							</div>
						</div>
						<InquiryButton />
					</div>
				</div>
			</div>
		</section>
	);
}
