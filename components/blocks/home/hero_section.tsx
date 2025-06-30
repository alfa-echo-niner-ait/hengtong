"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
	return (
		<>
			<main>
				<section className="overflow-hidden">
					<div className="relative mx-auto max-w-5xl px-6 py-25 lg:py-20">
						<div className="relative z-10 lg:w-1/2 space-y-8">
							<Link
								href="/about"
								className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-600 px-4 py-2 text-sm transition-all hover:bg-zinc-100 hover:text-primary dark:hover:bg-zinc-800"
								aria-label="Learn more about us"
							>
								<span>About Us</span>
								<span className="w-px h-4 bg-zinc-300 dark:bg-zinc-600" />
								<ArrowRight className="size-4" />
							</Link>

							<div className="space-y-6">
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary/85 leading-tight">
									Premium Anionic Surfactants <br className="hidden lg:block" />
									from China
								</h1>
								<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg">
									Cost-effective anionic surfactants with custom packaging solutions.
									We tailor our services to meet your project&apos;s unique requirements
									with precision and quality.
								</p>
							</div>

							<div className="flex gap-4">
								<Link
									href="/contact"
									className="bg-primary/85 text-white px-6 py-3 rounded-full font-medium hover:bg-primary transition-colors"
								>
									Get a Quote
								</Link>
								<Link
									href="/products"
									className="border border-zinc-300 dark:border-zinc-600 px-6 py-3 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
								>
									View Products
								</Link>
							</div>
						</div>
						<div className="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
							<div className="relative">
								<div className="bg-radial-[at_85%_35%] to-background z-1 -inset-17 absolute from-transparent to-50%"></div>
								<Image
									className="dark:hidden"
									src="/factory.png"
									alt="app illustration"
									width={2796}
									height={2008}
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
