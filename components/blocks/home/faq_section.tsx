"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";

type FAQItem = {
	id: string;
	icon: IconName;
	question: string;
	answer: string | React.ReactNode;
};

export default function FAQSection() {
	const faqItems: FAQItem[] = [
		{
			id: "item-1",
			icon: "building-2",
			question: "Are you a manufacturer or trading company?",
			answer:
				"Yes, we are the leading manufacturer factory in China. Hengtong Trading is responsible for managing international trade.",
		},
		{
			id: "item-2",
			icon: "calculator",
			question: "What is the Minimum Order Quantity (MOQ)?",
			answer:
				"Our standard MOQ is 500 kg, but we can accommodate smaller trial orders based on customer requirements. Please contact us to discuss your needs.",
		},
		{
			id: "item-3",
			icon: "circle-dollar-sign",
			question: "What are the payment terms?",
			answer: (
				<>
					We offer flexible payment options, including:
					<ul className="mt-2 list-disc pl-5">
						<li>
							<b>T/T (Telegraphic Transfer):</b> 30% deposit, 70% balance before
							shipment
						</li>
						<li>
							<b>L/C (Letter of Credit):</b> Available for large orders upon
							agreement
						</li>
					</ul>
				</>
			),
		},
		{
			id: "item-4",
			icon: "clock",
			question: "How long is the lead time?",
			answer: (
				<>
					The lead time depends on the order quantity and production schedule.
					Typically:
					<ul>
						<li>
							<b>Sample Orders:</b> 5-7 business days.
						</li>
						<li>
							<b>Bulk Orders:</b> 2-4 weeks after payment confirmation.
						</li>
					</ul>
				</>
			),
		},
	];

	return (
		<section className="py-20">
			<div className="mx-auto max-w-5xl px-4 md:px-6">
				<div className="flex flex-col gap-10 md:flex-row md:gap-16">
					<div className="md:w-1/3">
						<div className="sticky top-20">
							<h2 className="mt-4 text-3xl font-bold">
								Frequently Asked Questions
							</h2>
							<p className="text-muted-foreground mt-4">
								Can&apos;t find what you&apos;re looking for? Contact our{" "}
								<Link
									href="#"
									className="text-primary font-medium hover:underline"
								>
									customer support team
								</Link>
							</p>
						</div>
					</div>
					<div className="md:w-2/3">
						<Accordion type="single" collapsible className="w-full space-y-2">
							{faqItems.map((item) => (
								<AccordionItem
									key={item.id}
									value={item.id}
									className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
								>
									<AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
										<div className="flex items-center gap-3">
											<div className="flex size-6">
												<DynamicIcon
													name={item.icon}
													className="m-auto size-4"
												/>
											</div>
											<span className="text-base">{item.question}</span>
										</div>
									</AccordionTrigger>
									<AccordionContent className="pb-5">
										<div className="px-9">
											<p className="text-base whitespace-pre-line">
												{item.answer}
											</p>
										</div>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
}
