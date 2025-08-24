import { Button } from "@/components/ui/button";
import { IconBrandWhatsappFilled, IconMailFilled } from "@tabler/icons-react";
import Link from "next/link";

const handleWhatsAppClick = (product_name: string) => {
	// Create custom message with product name and page URL
	const message = `
    Hello!
    I'm interested in this product:
    *${product_name}*
    *URL:* ${typeof window !== "undefined" ? window.location.href : ""}

    Please provide more details.
    Thank you!
  `;

	// Encode the message for URL
	const encodedMessage = encodeURIComponent(message);

	// Open WhatsApp with the pre-filled message
	window.open(`https://wa.me/8613341246160?text=${encodedMessage}`, "_blank");
};

type InquiryButtonProps = {
	product_name: string;
};

export function InquiryButton({ product_name }: InquiryButtonProps) {
	return (
		<div className="flex gap-4">
			<Button size="lg" className="flex-1 md:w-auto bg-blue-400">
				<Link href="/contact" className="flex items-center">
					<IconMailFilled className="mr-2 h-6 w-6" /> Mail Inquiry
				</Link>
			</Button>
			<Button
				onClick={() => handleWhatsAppClick(product_name)}
				variant="outline"
				size="lg"
				className="bg-green-600 text-white hover:bg-green-700 hover:text-white"
			>
				<IconBrandWhatsappFilled className="mr-2 h-6 w-6" />
				WhatsApp Inquiry
			</Button>
		</div>
	);
}
