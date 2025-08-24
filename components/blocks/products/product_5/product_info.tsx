"use client"

import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
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
										src="/products/gypsum_board_foaming_agent.jpg"
										alt="Gypsum Board Foaming Agent"
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
								Gypsum Board Foaming Agent
							</h1>
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
								<div>
									<h3 className="text-blue-950 font-semibold">
										Main Ingredients
									</h3>
								</div>
								<div className="sm:col-span-2">
									<p className="text-muted-foreground">
										Anionic surfactants, foam stabilizer
									</p>
								</div>
								<div>
									<h3 className="text-blue-950 font-semibold">Character</h3>
								</div>
								<div className="sm:col-span-2">
									<p className="text-muted-foreground">
										A slightly yellow liquid
									</p>
								</div>
								<div>
									<h3 className="text-blue-950 font-semibold">Type number</h3>
								</div>
								<div className="sm:col-span-2">
									<p className="text-muted-foreground">
										1# foaming agent, 2# foaming agent, 3# foaming agent, GF
										foaming agent
									</p>
								</div>
								<div>
									<h3 className="text-blue-950 font-semibold">
										Characteristic
									</h3>
								</div>
								<div className="sm:col-span-2">
									<p className="text-muted-foreground">
										This product is composed of anionic surfactant adding
										foaming agent and stabilizing agent. It has the
										characteristics of fast foaming, high foaming efficiency,
										fine foam, good stability and excellent salt resistance,
										temperature resistance and hard water resistance. This
										product is environmentally friendly and has good
										biodegradability.
									</p>
								</div>
							</div>
							<InquiryButton product_name="Gypsum Board Foaming Agent" />
						</div>
					</div>
				</div>
			</section>
		);
}