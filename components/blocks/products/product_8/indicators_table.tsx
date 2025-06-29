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
					<TableCell className="border">White powder</TableCell>
				</TableRow>
				<TableRow key="2" className="bg-gray-50">
					<TableCell className="border">Active matter, %</TableCell>
					<TableCell className="border">≥85</TableCell>
				</TableRow>
				<TableRow key="3">
					<TableCell className="border">Free oil, %</TableCell>
					<TableCell className="border">≤1.5</TableCell>
				</TableRow>
				<TableRow key="4" className="bg-gray-50">
					<TableCell className="border">Magnesium sulfate, %</TableCell>
					<TableCell className="border">≤3.0</TableCell>
				</TableRow>
				<TableRow key="5">
					<TableCell className="border">NaCL, %</TableCell>
					<TableCell className="border">≤0.5</TableCell>
				</TableRow>
				<TableRow key="6" className="bg-gray-50">
					<TableCell className="border">
						Water, %
					</TableCell>
					<TableCell className="border">≤10</TableCell>
				</TableRow>
				<TableRow key="7">
					<TableCell className="border">PH Value, 1% aq solution</TableCell>
					<TableCell className="border">7.5-10.5</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
