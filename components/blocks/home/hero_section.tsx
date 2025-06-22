"use client";

import { Logo } from "../../logo";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
	{ name: "Home", href: "/" },
	{ name: "Products", href: "#" },
	{ name: "FAQ", href: "#" },
	{ name: "About", href: "#" },
];

export default function HeroSection() {
	const [menuState, setMenuState] = useState(false);
	return (
		<>
			<header>
				<nav
					data-state={menuState && "active"}
					className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
				>
					<div className="m-auto max-w-5xl px-6">
						<div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
							<div className="flex w-full justify-between lg:w-auto">
								<Link
									href="/"
									aria-label="home"
									className="flex items-center space-x-2"
								>
									<Logo className="h-10 w-auto" />
								</Link>

								<button
									onClick={() => setMenuState(!menuState)}
									aria-label={menuState == true ? "Close Menu" : "Open Menu"}
									className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
								>
									<Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
									<X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
								</button>
							</div>

							<div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
								<div className="lg:pr-4">
									<ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
										{menuItems.map((item, index) => (
											<li key={index}>
												<Link
													href={item.href}
													className="text-dark hover:text-primary block duration-150"
												>
													<span>{item.name}</span>
												</Link>
											</li>
										))}
									</ul>
								</div>

								<div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
									<Button asChild size="sm">
										<Link href="#">
											<span>Contact Us</span>
										</Link>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>

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

								<h1 className="mt-10 text-primary text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
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
