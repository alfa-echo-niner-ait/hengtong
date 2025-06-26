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
					<TableHead className="border" colSpan={2}>
						Inspection Item
					</TableHead>
					<TableHead className="border" colSpan={2}>
						Reagent Grade
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow key="1">
					<TableHead className="border" colSpan={2}>
						Name of index
					</TableHead>
					<TableCell className="border">99% class</TableCell>
					<TableCell className="border">97% class</TableCell>
				</TableRow>
				<TableRow key="2" className="bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Appearance
					</TableHead>
					<TableCell className="border">White flake crystal</TableCell>
					<TableCell className="border">White powder</TableCell>
				</TableRow>
				<TableRow key="3">
					<TableHead className="border" colSpan={2}>
						Active matter (%)，≥
					</TableHead>
					<TableCell className="border">99.5(on dry basis)</TableCell>
					<TableCell className="border">97</TableCell>
				</TableRow>
				<TableRow key="4" className="bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Petroleum ether soluble substances (%)，≤
					</TableHead>
					<TableCell className="border">0.5</TableCell>
					<TableCell className="border">2</TableCell>
				</TableRow>
				<TableRow key="5">
					<TableHead className="border" colSpan={2}>
						Na2SO4 (%)，≤
					</TableHead>
					<TableCell className="border">0.5</TableCell>
					<TableCell className="border">2</TableCell>
				</TableRow>
				<TableRow key="6" className="bg-gray-50">
					<TableHead className="border" colSpan={2}>
						NaCL (%)，≤
					</TableHead>
					<TableCell className="border">0.1</TableCell>
					<TableCell className="border">0.1</TableCell>
				</TableRow>
				<TableRow key="7">
					<TableHead className="border" colSpan={2}>
						Watee (%)，≤
					</TableHead>
					<TableCell className="border">1</TableCell>
					<TableCell className="border">2</TableCell>
				</TableRow>
				<TableRow key="8" className="bg-gray-50">
					<TableHead className="border" colSpan={2}>
						PH Value(1% aqueous solution)
					</TableHead>
					<TableCell className="border">6.0-8.0</TableCell>
					<TableCell className="border">6.0-11</TableCell>
				</TableRow>
				<TableRow key="9">
					<TableHead className="border" colSpan={2}>
						Phosphate, ≤
					</TableHead>
					<TableCell className="border">1ppm</TableCell>
					<TableCell className="border">-</TableCell>
				</TableRow>
				<TableRow key="10" className="bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Lead (Pb), ≤
					</TableHead>
					<TableCell className="border">2ppm</TableCell>
					<TableCell className="border">-</TableCell>
				</TableRow>
				<TableRow key="11">
					<TableHead className="border" colSpan={2}>
						Iron (Fe), ≤
					</TableHead>
					<TableCell className="border">1ppm</TableCell>
					<TableCell className="border">-</TableCell>
				</TableRow>
				<TableRow key="12" className="bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Nitrogen (N), ≤
					</TableHead>
					<TableCell className="border">5ppm</TableCell>
					<TableCell className="border">-</TableCell>
				</TableRow>
				<TableRow key="13">
					<TableHead className="border" colSpan={2}>
						Arsenic (As), ≤
					</TableHead>
					<TableCell className="border">0.1ppm</TableCell>
					<TableCell className="border">-</TableCell>
				</TableRow>
				<TableRow key="14" className="bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Distillation content (%)，≥
					</TableHead>
					<TableCell className="border" colSpan={2}>
						99.5
					</TableCell>
				</TableRow>
				<TableRow key="15">
					<TableHead className="border">Absorbance value</TableHead>
					<TableCell className="border">230nm, ≤</TableCell>
					<TableCell className="border">0.4</TableCell>
					<TableCell className="border">-</TableCell>
				</TableRow>
				<TableRow key="16" className="bg-gray-50">
					<TableHead className="border" rowSpan={3}>
						3%, deionized water
					</TableHead>
					<TableCell className="border">260nm, ≤</TableCell>
					<TableCell className="border">0.1</TableCell>
					<TableCell className="border">-</TableCell>
				</TableRow>
				<TableRow key="17">
					<TableCell className="border">280nm, ≤</TableCell>
					<TableCell className="border">0.075</TableCell>
					<TableCell className="border">-</TableCell>
				</TableRow>
				<TableRow key="18" className="bg-gray-50">
					<TableCell className="border">410nm, ≤</TableCell>
					<TableCell className="border">0.01</TableCell>
					<TableCell className="border">-</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
