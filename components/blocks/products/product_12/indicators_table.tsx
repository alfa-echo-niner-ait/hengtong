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
					<TableCell className="border">
						Yellow transparent liquid, no impurities
					</TableCell>
				</TableRow>
				<TableRow key="2" className="bg-gray-50">
					<TableCell className="border">Active Substance, %</TableCell>
					<TableCell className="border">34-42</TableCell>
				</TableRow>
				<TableRow key="3">
					<TableCell className="border">Unsulfated Substance, %</TableCell>
					<TableCell className="border">≤1.0</TableCell>
				</TableRow>
				<TableRow key="4" className="bg-gray-50">
					<TableCell className="border">Sodium sulfate, %</TableCell>
					<TableCell className="border">≤2.0</TableCell>
				</TableRow>
				<TableRow key="5">
					<TableCell className="border">Sodium chloride, %</TableCell>
					<TableCell className="border">≤0.5</TableCell>
				</TableRow>
				<TableRow key="6">
					<TableCell className="border">PH-value (1% aq sol, 25℃)</TableCell>
					<TableCell className="border">10-11</TableCell>
				</TableRow>
				<TableRow key="7">
					<TableCell className="border">Color (Hazen) (20%aq)</TableCell>
					<TableCell className="border">≺200</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
