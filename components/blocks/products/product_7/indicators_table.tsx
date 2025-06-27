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
					<TableCell className="border">Name of index</TableCell>
					<TableCell className="border">99% class</TableCell>
				</TableRow>
				<TableRow key="2" className="bg-gray-50">
					<TableCell className="border">Appearance</TableCell>
					<TableCell className="border">White flake crystal</TableCell>
				</TableRow>
				<TableRow key="3">
					<TableCell className="border">
						Active matter (%)，≥
					</TableCell>
					<TableCell className="border">99.5(on dry basis)</TableCell>
				</TableRow>
				<TableRow key="4" className="bg-gray-50">
					<TableCell className="border">PH value (3% aqueous solution)</TableCell>
					<TableCell className="border">6.0-10.0</TableCell>
				</TableRow>
				<TableRow key="5">
					<TableCell className="border">
						Fraction content (%)，≥
					</TableCell>
					<TableCell className="border">99.5</TableCell>
				</TableRow>
				<TableRow key="6" className="bg-gray-50">
					<TableCell className="border" rowSpan={2}>Absorbance value</TableCell>
					<TableCell className="border">260nm, ≤ 0.1</TableCell>
				</TableRow>
				<TableRow key="7">
					<TableCell className="border">280nm, ≤ 0.075</TableCell>
				</TableRow>
				<TableRow key="8" className="bg-gray-50">
					<TableCell className="border" colSpan={2}>(3%, deionized water)</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
