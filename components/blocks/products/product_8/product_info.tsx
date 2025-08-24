"use client";

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
									src="/products/magnesium_dodecyl_sulfate.jpg"
									alt="Magnesium Dodecyl Sulfate"
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
							Magnesium Dodecyl Sulfate
						</h1>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
							<div>
								<h3 className="text-blue-950 font-semibold">Other Name</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">
									Magnesium dodecyl sulfate, Magnesium lauryl sulfate
								</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">Name</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">
									Magnesium Dodecyl Sulfate
								</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">Abbreviate</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">MDS</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">
									Molecular Formula
								</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">
									(CnH2nOSO3) 2Mg, n=12-16
								</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">
									Molecular weight
								</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">570</p>
							</div>
						</div>
						<InquiryButton product_name="Magnesium Dodecyl Sulfate" />
					</div>
				</div>
			</div>
		</section>
	);
}
