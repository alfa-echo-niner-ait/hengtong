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
						<div className="lg:flex lg:items-center lg:gap-12">
							<div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
								<Link
									href="/"
									className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border border-zinc-500 dark:border-zinc-50 p-2 pr-3 lg:ml-0 hover:text-primary"
								>
									<span className="text-sm">About Us</span>
									<span className="bg-(--color-border) block h-4 w-px"></span>
									<ArrowRight className="size-4" />
								</Link>

								<h1 className="mt-10 text-primary/85 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
									Quality Anionic Surfactants Services from China
								</h1>
								<p className="mt-8">
									Cost-effective anionic surfactants, and production of custom
									packaging. Your project is unique, and we deliver the service
									it demands.
								</p>
							</div>
						</div>
						<div className="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
							<div className="relative">
								<div className="bg-radial-[at_65%_25%] to-background z-1 -inset-17 absolute from-transparent to-45%"></div>
								<Image
									className="hidden dark:block"
									src="/factory.png"
									alt="app illustration"
									width={2796}
									height={2008}
								/>
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
