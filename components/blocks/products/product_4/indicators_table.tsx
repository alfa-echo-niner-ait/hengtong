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
					<TableCell className="border">Blue/Red needle shape</TableCell>
				</TableRow>
				<TableRow key="2" className="bg-gray-50">
					<TableCell className="border">Active matter content (%)</TableCell>
					<TableCell className="border">≥93</TableCell>
				</TableRow>
				<TableRow key="3">
					<TableCell className="border">
						PH Value (1% aqueous solution)
					</TableCell>
					<TableCell className="border">8.0-11.0</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
