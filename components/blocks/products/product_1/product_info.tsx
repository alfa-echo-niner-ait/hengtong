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
									src="/products/sodium_lauryl_sulfate.jpg"
									alt="Sodium Lauryl Sulfate"
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
							Sodium Lauryl Sulfate
						</h1>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
							<div>
								<h3 className="text-blue-950 font-semibold">Common Name</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">K12</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">Other Names</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">
									Foaming agent, Sodium cohol sulfate, Sodium lauryl sulfate,
									Fatty alcohol sodium sulfate, Sodium dodecyl sulfate
								</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">English name</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">Sodium Lauryl Sulfate</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">Abbreviation</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">SLS</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">CAS Number</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">73296-89-6, 68955-19-1</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">
									Molecular Formula
								</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">ROSO3Na C12-C16 alkyl</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">Formula Weight</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">
									292-310 (R=C12-C18 alkyl)
								</p>
							</div>
							<div>
								<h3 className="text-blue-950 font-semibold">Grades</h3>
							</div>
							<div className="sm:col-span-2">
								<p className="text-muted-foreground">
									According to the application field and standard, it can be
									divided into industrial grade (GB/T15963-2022), Toothpaste
									grade (QB/T2900-2012) and Latex grade.
								</p>
							</div>
						</div>
						<div className="flex gap-4">
							<InquiryButton product_name="Sodium Lauryl Sulfate" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
