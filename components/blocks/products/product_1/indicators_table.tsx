import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export function PowderNeedleTable() {
	return (
		<Table className="border">
			<TableHeader className="bg-gray-100">
				<TableRow>
					<TableHead className="border" colSpan={2}></TableHead>
					<TableHead className="border" colSpan={3}>
						Powder Products (F)
					</TableHead>
					<TableHead className="border" colSpan={2}>
						Needle Products (Z)
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow key="1" className="border">
					<TableHead className="border" colSpan={2}>
						Name of index
					</TableHead>
					<TableCell className="border">Level 92</TableCell>
					<TableCell className="border">Level 93</TableCell>
					<TableCell className="border">Level 95</TableCell>
					<TableCell className="border">Level 92</TableCell>
					<TableCell className="border">Level 95</TableCell>
				</TableRow>
				<TableRow key="2" className="border bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Surface
					</TableHead>
					<TableCell className="border" colSpan={3}>
						White or light yellow powdery, without clumping
					</TableCell>
					<TableCell className="border" colSpan={2}>
						White or light yellow needle-like, without caking
					</TableCell>
				</TableRow>
				<TableRow key="3" className="border">
					<TableHead className="border" colSpan={2}>
						Actives, %≥
					</TableHead>
					<TableCell className="border">92</TableCell>
					<TableCell className="border">93</TableCell>
					<TableCell className="border">95</TableCell>
					<TableCell className="border">92</TableCell>
					<TableCell className="border">95</TableCell>
				</TableRow>
				<TableRow key="4" className="border bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Free oil, %≤
					</TableHead>
					<TableCell className="border">1.2</TableCell>
					<TableCell className="border">1.2</TableCell>
					<TableCell className="border">1.2</TableCell>
					<TableCell className="border">2</TableCell>
					<TableCell className="border">1.5</TableCell>
				</TableRow>
				<TableRow key="5" className="border">
					<TableHead className="border" rowSpan={2}>
						Mineral salt, %≤
					</TableHead>
					<TableCell className="border">Sodium sulfate</TableCell>
					<TableCell className="border">5.8</TableCell>
					<TableCell className="border">4.8</TableCell>
					<TableCell className="border">2.5</TableCell>
					<TableCell className="border">4.8</TableCell>
					<TableCell className="border">2.5</TableCell>
				</TableRow>
				<TableRow key="6" className="border bg-gray-50">
					<TableCell className="border">Sodium chloride</TableCell>
					<TableCell className="border">0.15</TableCell>
					<TableCell className="border">0.15</TableCell>
					<TableCell className="border">0.15</TableCell>
					<TableCell className="border">0.15</TableCell>
					<TableCell className="border">0.15</TableCell>
				</TableRow>
				<TableRow key="7" className="border">
					<TableHead className="border" colSpan={2}>
						Water content, %≤
					</TableHead>
					<TableCell className="border">2</TableCell>
					<TableCell className="border">2</TableCell>
					<TableCell className="border">2</TableCell>
					<TableCell className="border">4</TableCell>
					<TableCell className="border">3</TableCell>
				</TableRow>
				<TableRow key="8" className="border bg-gray-50">
					<TableHead className="border" colSpan={2}>
						pH value (1% aqueous solution)
					</TableHead>
					<TableCell className="border" colSpan={3}>
						7.5-9.5
					</TableCell>
					<TableCell className="border" colSpan={2}>
						7.5-10.5
					</TableCell>
				</TableRow>
				<TableRow key="9" className="border">
					<TableHead className="border" colSpan={2}>
						pH value (1% aqueous solution)
					</TableHead>
					<TableCell className="border" colSpan={5}>
						90
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}

export function ToothpaseGradeTable() {
	return (
		<Table className="border">
			<TableHeader className="bg-gray-100">
				<TableRow>
					<TableHead colSpan={2} className="border"></TableHead>
					<TableHead colSpan={3} className="border">
						Toothpaste grade (Y)
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow key="1" className="border">
					<TableHead className="border" colSpan={2}>
						Name of index
					</TableHead>
					<TableCell className="border">Level 1</TableCell>
					<TableCell className="border">Level 2</TableCell>
					<TableCell className="border">Level 3</TableCell>
				</TableRow>
				<TableRow key="2" className="border bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Surface
					</TableHead>
					<TableCell className="border" colSpan={3}>
						White or light yellow powder or needle-shaped, no lumps
					</TableCell>
				</TableRow>
				<TableRow key="3" className="border">
					<TableHead className="border" colSpan={2}>
						Actives, %≥
					</TableHead>
					<TableCell className="border">95</TableCell>
					<TableCell className="border">93</TableCell>
					<TableCell className="border">93</TableCell>
				</TableRow>
				<TableRow key="4" className="border bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Free oil, %≤
					</TableHead>
					<TableCell className="border">1.2</TableCell>
					<TableCell className="border">1.2</TableCell>
					<TableCell className="border">1.2</TableCell>
				</TableRow>
				<TableRow key="5" className="border">
					<TableHead className="border" rowSpan={2}>
						Mineral salt, %≤
					</TableHead>
					<TableCell className="border">Sodium sulfate</TableCell>
					<TableCell className="border">2.5</TableCell>
					<TableCell className="border">3.2</TableCell>
					<TableCell className="border">4</TableCell>
				</TableRow>
				<TableRow key="6" className="border bg-gray-50">
					<TableCell className="border">Sodium chloride</TableCell>
					<TableCell className="border">0.15</TableCell>
					<TableCell className="border">0.15</TableCell>
					<TableCell className="border">0.15</TableCell>
				</TableRow>
				<TableRow key="7" className="border">
					<TableHead className="border" colSpan={2}>
						Water content, %≤
					</TableHead>
					<TableCell className="border">2</TableCell>
					<TableCell className="border">2</TableCell>
					<TableCell className="border">3</TableCell>
				</TableRow>
				<TableRow key="8" className="border bg-gray-50">
					<TableHead className="border" colSpan={2}>
						pH value (1% aqueous solution)
					</TableHead>
					<TableCell className="border">8-9.3</TableCell>
					<TableCell className="border">8-9.3</TableCell>
					<TableCell className="border">8-10</TableCell>
				</TableRow>
				<TableRow key="9" className="border">
					<TableHead className="border" colSpan={2}>
						Whiteness (wb)，≥
					</TableHead>
					<TableCell className="border" colSpan={3}>
						90
					</TableCell>
				</TableRow>
				<TableRow key="10" className="border bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Frothing volume/mm, ≥
					</TableHead>
					<TableCell className="border" colSpan={3}>
						180
					</TableCell>
				</TableRow>
				<TableRow key="11" className="border">
					<TableHead className="border" colSpan={2}>
						Heavy metal (Pb)/(mg/Kg), ≤
					</TableHead>
					<TableCell className="border" colSpan={3}>
						15
					</TableCell>
				</TableRow>
				<TableRow key="12" className="border bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Arsenic content (As)/(mg/Kg), ≤
					</TableHead>
					<TableCell className="border" colSpan={3}>
						3
					</TableCell>
				</TableRow>
				<TableRow key="13" className="border">
					<TableHead className="border" colSpan={2}>
						Total plate count/(CFU/g)，≤
					</TableHead>
					<TableCell className="border" colSpan={3}>
						100
					</TableCell>
				</TableRow>
				<TableRow key="14" className="border bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Total number of molds and yeasts/(CFU/g)，≤
					</TableHead>
					<TableCell className="border" colSpan={3}>
						3
					</TableCell>
				</TableRow>
				<TableRow key="15" className="border">
					<TableHead className="border" colSpan={2}>
						Pseudomonas aeruginosa
					</TableHead>
					<TableCell className="border" colSpan={3}>
						Not detectable
					</TableCell>
				</TableRow>
				<TableRow key="16" className="border bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Staphylococcus aureus
					</TableHead>
					<TableCell className="border" colSpan={3}>
						Not detectable
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}

export function LatexGradeTable() {
	return (
		<Table className="border">
			<TableHeader className="bg-gray-100">
				<TableRow>
					<TableHead colSpan={2} className="border"></TableHead>
					<TableHead colSpan={3} className="border">
						Latex grade (Powder, Needle, Liquid)
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow key="1" className="border">
					<TableHead className="border" colSpan={2}>
						Name of index
					</TableHead>
					<TableCell className="border">Polymer grade</TableCell>
					<TableCell className="border">Seed level</TableCell>
					<TableCell className="border">Liquid K12</TableCell>
				</TableRow>
				<TableRow key="2" className="border bg-gray-50">
					<TableHead className="border" rowSpan={2} colSpan={2}>
						Surface
					</TableHead>
					<TableCell className="border" colSpan={2}>
						White or light yellow powder or needle
					</TableCell>
					<TableCell className="border" rowSpan={2}>
						Light yellow transparent liquid
					</TableCell>
				</TableRow>
				<TableRow key="3" className="border">
					<TableCell className="border" colSpan={2}>
						Shape, no caking
					</TableCell>
				</TableRow>
				<TableRow key="4" className="border bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Actives, %≥
					</TableHead>
					<TableCell className="border">94</TableCell>
					<TableCell className="border">91</TableCell>
					<TableCell className="border">28.5-30.5</TableCell>
				</TableRow>
				<TableRow key="5" className="border">
					<TableHead className="border" colSpan={2}>
						Free oil, %≤
					</TableHead>
					<TableCell className="border">0.8-1.0</TableCell>
					<TableCell className="border">1.5-2.0</TableCell>
					<TableCell className="border">1.5</TableCell>
				</TableRow>
				<TableRow key="6" className="border bg-gray-50">
					<TableHead className="border" rowSpan={2}>
						Mineral salt, %≤
					</TableHead>
					<TableCell className="border">Sodium sulfate</TableCell>
					<TableCell className="border">3</TableCell>
					<TableCell className="border">3</TableCell>
					<TableCell className="border">1.5</TableCell>
				</TableRow>
				<TableRow key="7" className="border">
					<TableCell className="border">Sodium chloride</TableCell>
					<TableCell className="border">0.15</TableCell>
					<TableCell className="border">0.15</TableCell>
					<TableCell className="border">0.05</TableCell>
				</TableRow>
				<TableRow key="8" className="border bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Water content, %≤
					</TableHead>
					<TableCell className="border">3.5</TableCell>
					<TableCell className="border">3.5</TableCell>
					<TableCell className="border">-</TableCell>
				</TableRow>
				<TableRow key="9" className="border">
					<TableHead className="border" colSpan={2}>
						pH value (1% aqueous solution)
					</TableHead>
					<TableCell className="border" colSpan={2}>
						8-10.5
					</TableCell>
					<TableCell className="border">7.5-11</TableCell>
				</TableRow>
				<TableRow key="10" className="border bg-gray-50">
					<TableHead className="border" colSpan={2}>
						Whiteness (wb)，≥
					</TableHead>
					<TableCell className="border" colSpan={2}>
						90
					</TableCell>
					<TableCell className="border">-</TableCell>
				</TableRow>
				<TableRow key="11" className="border">
					<TableHead className="border" colSpan={2}>
						Color Klett (30% active substance)，≤
					</TableHead>
					<TableCell className="border" colSpan={2}>
						-
					</TableCell>
					<TableCell className="border">60</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
