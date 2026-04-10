import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { labResults } from "@/lib/demo-data";
import StatusBadge from "@/components/StatusBadge";
import { Search } from "lucide-react";

const LabResults = () => {
  const [search, setSearch] = useState("");
  const filtered = labResults.filter(
    (l) => l.productName.toLowerCase().includes(search.toLowerCase()) || l.testType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Lab Results</h1>
        <p className="text-sm text-muted-foreground">Laboratory test results</p>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search results..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="px-4 py-3 font-medium">ID</th>
                  <th className="px-4 py-3 font-medium">Product</th>
                  <th className="px-4 py-3 font-medium">Test Type</th>
                  <th className="px-4 py-3 font-medium">Analyst</th>
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Parameters</th>
                  <th className="px-4 py-3 font-medium">Result</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((l) => (
                  <tr key={l.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{l.id}</td>
                    <td className="px-4 py-3 font-medium text-foreground">{l.productName}</td>
                    <td className="px-4 py-3 text-muted-foreground">{l.testType}</td>
                    <td className="px-4 py-3 text-muted-foreground">{l.analyst}</td>
                    <td className="px-4 py-3 text-muted-foreground">{l.date}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground max-w-[200px] truncate">{l.parameters}</td>
                    <td className="px-4 py-3"><StatusBadge status={l.result} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LabResults;
