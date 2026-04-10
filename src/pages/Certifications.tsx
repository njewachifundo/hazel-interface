import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { certifications } from "@/lib/demo-data";
import StatusBadge from "@/components/StatusBadge";
import { Search } from "lucide-react";

const Certifications = () => {
  const [search, setSearch] = useState("");
  const filtered = certifications.filter(
    (c) => c.productName.toLowerCase().includes(search.toLowerCase()) || c.manufacturer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Certifications</h1>
        <p className="text-sm text-muted-foreground">Product certification records</p>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search certifications..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="px-4 py-3 font-medium">Cert #</th>
                  <th className="px-4 py-3 font-medium">Product</th>
                  <th className="px-4 py-3 font-medium">Manufacturer</th>
                  <th className="px-4 py-3 font-medium">Issue Date</th>
                  <th className="px-4 py-3 font-medium">Expiry Date</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr key={c.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{c.certNumber}</td>
                    <td className="px-4 py-3 font-medium text-foreground">{c.productName}</td>
                    <td className="px-4 py-3 text-muted-foreground">{c.manufacturer}</td>
                    <td className="px-4 py-3 text-muted-foreground">{c.issueDate}</td>
                    <td className="px-4 py-3 text-muted-foreground">{c.expiryDate}</td>
                    <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
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

export default Certifications;
