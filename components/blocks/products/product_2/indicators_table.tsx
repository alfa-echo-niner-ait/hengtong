import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@/components/ui/table";

export function IndicatorsTable() {
	return (
		<Table className="border">
			<TableBody>
				<TableRow key="1" className="bg-gray-100">
					<TableHead className="border" rowSpan={3} colSpan={2}>
						Inspection Item
					</TableHead>
					<TableHead className="border" colSpan={4}>
						Quality Index
					</TableHead>
				</TableRow>
				<TableRow key="2">
					<TableHead className="border" colSpan={2}>
						Powder
					</TableHead>
					<TableHead className="border">Needle-like</TableHead>
					<TableHead className="border"></TableHead>
				</TableRow>
				<TableRow key="3" className="bg-gray-50">
					<TableCell className="border">92%</TableCell>
					<TableCell className="border">95%</TableCell>
					<TableCell className="border">92%</TableCell>
					<TableHead className="border">Liquid Product</TableHead>
				</TableRow>
				<TableRow key="4">
					<TableHead className="border" colSpan={2}>
						External view
					</TableHead>
					<TableCell className="border" colSpan={2}>
						Pale yellow powder
					</TableCell>
					<TableCell className="border">Pale yellow column</TableCell>
					<TableCell className="border">
						Light yellow transparent liquid
					</TableCell>
				</TableRow>
				<TableRow key="5" className="bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Active matter, %≥
					</TableHead>
					<TableCell className="border">92.0</TableCell>
					<TableCell className="border">95.0</TableCell>
					<TableCell className="border">92.0</TableCell>
					<TableCell className="border">35-40</TableCell>
				</TableRow>
				<TableRow key="6">
					<TableHead className="border" colSpan={2}>
						Petroleum ether soluble matter, %≤
					</TableHead>
					<TableCell className="border">3.0</TableCell>
					<TableCell className="border">3.0</TableCell>
					<TableCell className="border">3.0</TableCell>
					<TableCell className="border">1.5</TableCell>
				</TableRow>
				<TableRow key="7" className="bg-gray-50">
					<TableHead className="border" rowSpan={2}>
						Inorganic salt, %≤
					</TableHead>
					<TableCell className="border">Sodium sulfate</TableCell>
					<TableCell className="border" rowSpan={2}>
						5.5
					</TableCell>
					<TableCell className="border" rowSpan={2}>
						2.5
					</TableCell>
					<TableCell className="border" rowSpan={2}>
						2.5
					</TableCell>
					<TableCell className="border">1.5</TableCell>
				</TableRow>
				<TableRow key="8">
					<TableCell className="border">Sodium chloride</TableCell>
					<TableCell className="border">0.1</TableCell>
				</TableRow>
				<TableRow key="9" className="bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Water content, %≤
					</TableHead>
					<TableCell className="border">3.0</TableCell>
					<TableCell className="border">3.0</TableCell>
					<TableCell className="border">5.0</TableCell>
					<TableCell className="border">-</TableCell>
				</TableRow>
				<TableRow key="10">
					<TableCell className="border" colSpan={2}>
						PH value (1% aqueous solution)
					</TableCell>
					<TableCell className="border" colSpan={3}>
						9.0-12.0
					</TableCell>
					<TableCell className="border">-</TableCell>
				</TableRow>
				<TableRow key="11" className="bg-gray-50">
					<TableHead className="border" colSpan={2}>
						free alkali (%) ≤
					</TableHead>
					<TableCell className="border">-</TableCell>
					<TableCell className="border">-</TableCell>
					<TableCell className="border">-</TableCell>
					<TableCell className="border">0.3</TableCell>
				</TableRow>
				<TableRow key="12">
					<TableHead className="border" colSpan={2}>
						whiteness (wb), ≥
					</TableHead>
					<TableCell className="border">80</TableCell>
					<TableCell className="border">80</TableCell>
					<TableCell className="border">-</TableCell>
					<TableCell className="border">-</TableCell>
				</TableRow>
				<TableRow key="13" className="bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Color Klett (5% active substance)，≤
					</TableHead>
					<TableCell className="border">-</TableCell>
					<TableCell className="border">-</TableCell>
					<TableCell className="border">80</TableCell>
					<TableCell className="border">80</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
