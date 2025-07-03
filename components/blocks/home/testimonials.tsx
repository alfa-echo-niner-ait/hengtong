"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react"; // Or any icon library you use
import { AnimatedScroll } from "@/components/animation/scroll_load";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.4,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8, // Increased duration
		},
	},
};

const testimonials = [
	{
		id: 1,
		quote:
			"We appreciate their technical expertise in customizing Sodium N-Decyl Sulfate for our industrial cleaner formulation. The product performs exactly as specified with excellent solubility in cold water applications.",
		name: "Industrial CleanChem",
		role: "Industrial Chemicals, USA",
		initials: "IC",
		accentColor: "border bg-blue-50 text-blue-800",
	},
	{
		id: 2,
		quote:
			"The Gypsum Board Foaming Agent helped us achieve perfect pore structure while reducing raw material costs by 18% compared to our previous supplier.",
		name: "BuildChem Materials",
		role: "Construction Chemicals, UAE",
		initials: "BC",
		accentColor: "border bg-emerald-50 text-emerald-800",
	},
	{
		id: 3,
		quote:
			"The Sodium Lauryl Sulfate from this supplier consistently meets our 99.5% purity requirements. Their batch-to-batch consistency has helped us maintain quality in our detergent production for over 3 years.",
		name: "ChemiTrade Solutions",
		role: "Specialty Chemicals Distributor, Germany",
		initials: "CT",
		accentColor: "border bg-amber-50 text-amber-800",
	},
];

export default function Testimonials() {
	return (
		<section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
			<div className="container px-4 mx-auto max-w-5xl">
				<AnimatedScroll duration={1}>
					<div className="text-center mb-12">
						<h2 className="text-balance text-3xl font-semibold sm:text-4xl">
							Trusted by Chemical Partners Worldwide
						</h2>
						<p className="mt-3 text-muted-foreground">
							What industry professionals say about our premium surfactants
						</p>
					</div>
				</AnimatedScroll>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-50px" }}
					className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3"
				>
					{testimonials.map((testimonial) => (
						<Card
							key={testimonial.id}
							className={`overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ease-in-out border-l-4 ${testimonial.accentColor} hover:-translate-y-1 hover:scale-[1.02] hover:bg-muted/30`}
						>
							<motion.div variants={item}>
								<CardContent className="p-5 flex flex-col h-full">
									<QuoteIcon className="size-6 opacity-30 mb-3" />
									<blockquote className="flex-1">
										<p className="text-sm leading-relaxed text-muted-foreground">
											“{testimonial.quote}”
										</p>
									</blockquote>
									<footer className="mt-5">
										<div className="flex items-center gap-3">
											<Avatar className="size-9">
												<AvatarFallback
													className={`${testimonial.accentColor} font-medium`}
												>
													{testimonial.initials}
												</AvatarFallback>
											</Avatar>
											<div>
												<cite className="not-italic font-medium block text-sm">
													{testimonial.name}
												</cite>
												<span className="text-xs text-muted-foreground block">
													{testimonial.role}
												</span>
											</div>
										</div>
									</footer>
								</CardContent>
							</motion.div>
						</Card>
					))}
				</motion.div>
			</div>
		</section>
	);
}
