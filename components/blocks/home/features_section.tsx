import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TestTube2, Truck, Zap, Package } from "lucide-react";
import { ReactNode } from "react";

export default function FeaturesSection() {
	return (
		<section className="bg-zinc-50 py-16 md:py-25 dark:bg-transparent">
			<div className="@container mx-auto max-w-5xl px-6">
				{" "}
				{/* Increased max-width */}
				<div className="text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-5xl">
						Our Manufacturing Capabilities
					</h2>
					<p className="mt-4">
						We provide low and large-volume manufacturing services to support
						your product development needs. Our international team will work
						with you to make your product ideas a reality through high-quality
						products and ensure your orders are shipped on time.
					</p>
				</div>
				<Card className="@min-4xl:max-w-full @min-4xl:grid-cols-4 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
					<div className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Zap className="size-8" aria-hidden />
							</CardDecorator>

							<h3 className="mt-6 font-medium">Fast Response</h3>
						</CardHeader>

						<CardContent>
							<p className="text-sm">
								We strive to respond to all inquiries within 24 hours except
								Chinese holidays.
							</p>
						</CardContent>
					</div>

					<div className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<TestTube2 className="size-8" aria-hidden />
							</CardDecorator>

							<h3 className="mt-6 font-medium">Free Sample</h3>
						</CardHeader>

						<CardContent>
							<p className="mt-3 text-sm">
								We offer free samples. Feel free to apply it.
							</p>
						</CardContent>
					</div>

					<div className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Truck className="size-8" aria-hidden />
							</CardDecorator>

							<h3 className="mt-6 font-medium">Fast Delivery</h3>
						</CardHeader>

						<CardContent>
							<p className="mt-3 text-sm">
								We keep many products in stock and we guarantee your shipments
								on time.
							</p>
						</CardContent>
					</div>

					<div className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Package className="size-8" aria-hidden />
							</CardDecorator>

							<h3 className="mt-6 font-medium">Custom Packaging</h3>
						</CardHeader>

						<CardContent>
							<p className="mt-3 text-sm">
								Custom packaging is available as per your need.
							</p>
						</CardContent>
					</div>
				</Card>
			</div>
		</section>
	);
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
	<div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
		<div
			aria-hidden
			className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
		/>
		<div
			aria-hidden
			className="bg-radial to-background absolute inset-0 from-transparent to-75%"
		/>
		<div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t group-hover:text-primary">
			{children}
		</div>
	</div>
);
