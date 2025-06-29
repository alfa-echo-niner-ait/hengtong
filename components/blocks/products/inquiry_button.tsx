import { Button } from "@/components/ui/button";
import Link from "next/link";

export function InquiryButton() {
    return (
			<Button size="lg" className="w-full md:w-auto bg-blue-400">
				<Link href="/contact">
					<span>Send Inquiry</span>
				</Link>
			</Button>
		);
}