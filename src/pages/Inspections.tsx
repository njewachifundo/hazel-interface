import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { inspections } from "@/lib/demo-data";
import StatusBadge from "@/components/StatusBadge";
import { Search, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Inspections = () => {
  const [search, setSearch] = useState("");
  const filtered = inspections.filter(
    (i) =>
      i.productName.toLowerCase().includes(search.toLowerCase()) ||
      i.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Inspections</h1>
          <p className="text-sm text-muted-foreground">Food quality inspections</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button><Plus className="mr-2 h-4 w-4" />New Inspection</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Schedule Inspection</DialogTitle></DialogHeader>
            <form onSubmit={(e) => { e.preventDefault(); toast.success("Inspection scheduled (demo)"); }} className="space-y-4">
              <div className="space-y-2"><Label>Product</Label><Input placeholder="Product name" required /></div>
              <div className="space-y-2"><Label>Location</Label><Input placeholder="Inspection location" required /></div>
              <div className="space-y-2"><Label>Type</Label><Input placeholder="routine / complaint / follow-up" required /></div>
              <div className="space-y-2"><Label>Date</Label><Input type="date" required /></div>
              <Button type="submit" className="w-full">Schedule</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search inspections..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="px-4 py-3 font-medium">ID</th>
                  <th className="px-4 py-3 font-medium">Product</th>
                  <th className="px-4 py-3 font-medium">Location</th>
                  <th className="px-4 py-3 font-medium">Inspector</th>
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((i) => (
                  <tr key={i.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{i.id}</td>
                    <td className="px-4 py-3 font-medium text-foreground">{i.productName}</td>
                    <td className="px-4 py-3 text-muted-foreground">{i.location}</td>
                    <td className="px-4 py-3 text-muted-foreground">{i.inspector}</td>
                    <td className="px-4 py-3 text-muted-foreground">{i.date}</td>
                    <td className="px-4 py-3 capitalize text-muted-foreground">{i.type}</td>
                    <td className="px-4 py-3"><StatusBadge status={i.status} /></td>
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

export default Inspections;
