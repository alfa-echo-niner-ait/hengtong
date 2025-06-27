import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export function IndicatorsTable() {
	return (
		<Table className="border">
			<TableHeader className="bg-gray-100">
				<TableRow>
					<TableHead className="border">Inspection Item</TableHead>
					<TableHead className="border">Result</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow key="1">
					<TableCell className="border">Appearance</TableCell>
					<TableCell className="border">White Powder</TableCell>
				</TableRow>
				<TableRow key="2" className="bg-gray-50">
					<TableCell className="border">Solid content (%)，≥</TableCell>
					<TableCell className="border">90</TableCell>
				</TableRow>
				<TableRow key="3">
					<TableCell className="border">
						Water(%)，≤
					</TableCell>
					<TableCell className="border">5.0</TableCell>
				</TableRow>
				<TableRow key="4" className="bg-gray-50">
					<TableCell className="border">PH value (1% aqueous solution)</TableCell>
					<TableCell className="border">6.0-11.0</TableCell>
				</TableRow>
				<TableRow key="5">
					<TableCell className="border">
						Whiteness (Wb)，≥
					</TableCell>
					<TableCell className="border">80</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
