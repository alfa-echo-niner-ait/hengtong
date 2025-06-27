import { Card, CardContent } from "@/components/ui/card";

export function PNA() {
	return (
		<Card className="my-3">
			<CardContent className="p-6">
				<p className="text-sm text-justify">
					<b>Use 1</b>
					<br />
					This product is an anionic detergent, suitable for denatured polyacrylamide gel electrophoresis (SDS present). Especially at low temperatures.
					<br /><br />
					<b>Use 2</b>
					<br />
					This product can be used as pharmaceutical dispersant, biopharmaceutical fine equipment cleaning, electrophoresis, desiccant, preservative and so on.
				</p>
			</CardContent>
		</Card>
	);
}
