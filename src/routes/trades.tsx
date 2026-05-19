import { createFileRoute } from '@tanstack/react-router'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '#/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { History } from 'lucide-react'

export const Route = createFileRoute('/trades')({ component: Trades })

function Trades() {
  // Placeholder — trades table in DB but no API endpoint yet
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <History className="h-6 w-6" />
        <h1 className="text-2xl font-bold tracking-tight">Trade Log</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Historical Trades</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead>Direction</TableHead>
                <TableHead>Entry</TableHead>
                <TableHead>Exit</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>PnL</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={7} className="py-12 text-center text-muted-foreground">
                  No trades yet — trade history API endpoint is coming soon
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
