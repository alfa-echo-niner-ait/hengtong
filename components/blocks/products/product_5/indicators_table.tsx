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
					<TableHead className="border">Index</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow key="1">
					<TableCell className="border">Appearance</TableCell>
					<TableCell className="border">
						Light yellow transparent liquid
					</TableCell>
				</TableRow>
				<TableRow key="2" className="even:bg-gray-50">
					<TableCell className="border">Active matter conten (%)</TableCell>
					<TableCell className="border">≥34</TableCell>
				</TableRow>
				<TableRow key="3">
					<TableCell className="border">
						Petroleum ether-soluble material content (%)
					</TableCell>
					<TableCell className="border">≥1.8</TableCell>
				</TableRow>
				<TableRow key="4" className="even:bg-gray-50">
					<TableCell className="border">Sodium sulfate content (%)</TableCell>
					<TableCell className="border">≤2.0</TableCell>
				</TableRow>
				<TableRow key="5">
					<TableCell className="border">Sodium chloride content (%)</TableCell>
					<TableCell className="border">≤0.1</TableCell>
				</TableRow>
				<TableRow key="6" className="even:bg-gray-50">
					<TableCell className="border">PH Value (1% aq solution)</TableCell>
					<TableCell className="border">7-9.5</TableCell>
				</TableRow>
				<TableRow key="7">
					<TableCell className="border">Colour and lustre (klett)</TableCell>
					<TableCell className="border">≤60</TableCell>
				</TableRow>
				<TableRow key="8" className="even:bg-gray-50">
					<TableCell className="border">
						Foam height (mm) (5% active substance)
					</TableCell>
					<TableCell className="border">≥180</TableCell>
				</TableRow>
				<TableRow key="9">
					<TableCell className="border">
						Foam drop height after 5 minutes (mm)
					</TableCell>
					<TableCell className="border">≤5</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
