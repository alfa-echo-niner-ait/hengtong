import Image from "next/image";
import { AnimatedScroll } from "@/components/animation/scroll_load";

export default function AboutSection() {
	return (
		<section className="py-8 md:py-16">
			<AnimatedScroll duration={1}>
				<div className="mx-auto max-w-5xl space-y-6 px-6 md:space-y-12">
					<h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
						Company Overview
					</h2>
					<div className="grid gap-6 sm:grid-cols-2 md:gap-6 lg:gap-12">
						<div className="relative mb-6 sm:mb-0">
							<div className="group bg-linear-to-b aspect-[76/59] relative overflow-hidden rounded-2xl from-zinc-300 to-transparent p-px transition-all duration-300 hover:from-primary/20 dark:from-zinc-700 dark:hover:from-primary/20">
								<div className="relative h-full w-full rounded-[15px] overflow-hidden">
									<Image
										src="/factory_view.png"
										className="h-full w-full object-cover rounded-[15px] shadow transition-transform duration-500 group-hover:scale-105"
										alt="Factory view light"
										width={1333}
										height={702}
									/>
									{/* Overlay effect */}
									<div className="absolute inset-0 transition-all duration-300"></div>
								</div>
							</div>
						</div>

						<div className="relative space-y-4">
							<p className="text-foreground">
								Hengtong Jinhang Chemical Co., Ltd., established in 2016, is a
								modern chemical manufacturer located in Zibo, Shandong Province,
								China. Covering an area of 30,000 square meters and employing
								around 100 staff, we specialize in the production and
								development of surfactants and PVC additives. Our flagship
								product,{" "}
								<span className="text-accent-foreground font-bold">
									Sodium Lauryl Sulfate (SLS)
								</span>
								, boasts an annual output of 9,000 tons and ranks No. 1 globally
								in terms of sales volume. We also produce{" "}
								<span className="text-accent-foreground font-bold">
									Alpha Olefin Sulfonate (AOS)
								</span>{" "}
								and various{" "}
								<span className="text-accent-foreground font-bold">
									PVC additives
								</span>
								, serving industries such as personal care, plastics, coatings,
								and construction. Our products are certified by major
								international standards including{" "}
								<span className="text-accent-foreground font-bold">
									ISO, REACH, SGS
								</span>
								, and others. Our international trade department Hengtong
								Trading is based in Huangdao District, Qingdao, with a dedicated
								office to serve overseas clients efficiently and professionally.
							</p>
						</div>
					</div>
				</div>
			</AnimatedScroll>
		</section>
	);
}
