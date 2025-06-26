import { Card, CardContent } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export function IndicatorsTable() {
    return (
        <Card className="max-w-5xl mx-auto my-3">
            <CardContent className="p-6">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Inspection Item</TableHead>
                            <TableHead>Index</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>Appearance</TableCell>
                            <TableCell>Light yellow transparent liquid</TableCell>
                        </TableRow>
                        <TableRow key="2" className="even:bg-muted/50">
                            <TableCell>Active matter conten (%)</TableCell>
                            <TableCell>≥34</TableCell>
                        </TableRow>
                        <TableRow key="3">
                            <TableCell>Petroleum ether-soluble material content (%)</TableCell>
                            <TableCell>≥1.8</TableCell>
                        </TableRow>
                        <TableRow key="4" className="even:bg-muted/50">
                            <TableCell>Sodium sulfate content (%)</TableCell>
                            <TableCell>≤2.0</TableCell>
                        </TableRow>
                        <TableRow key="5">
                            <TableCell>Sodium chloride content (%)</TableCell>
                            <TableCell>≤0.1</TableCell>
                        </TableRow>
                        <TableRow key="6" className="even:bg-muted/50">
                            <TableCell>PH Value (1% aq solution)</TableCell>
                            <TableCell>7-9.5</TableCell>
                        </TableRow>
                        <TableRow key="7">
                            <TableCell>Colour and lustre (klett)</TableCell>
                            <TableCell>≤60</TableCell>
                        </TableRow>
                        <TableRow key="8" className="even:bg-muted/50">
                            <TableCell>Foam height (mm) (5% active substance)</TableCell>
                            <TableCell>≥180</TableCell>
                        </TableRow>
                        <TableRow key="9">
                            <TableCell>Foam drop height after 5 minutes (mm)</TableCell>
                            <TableCell>≤5</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}