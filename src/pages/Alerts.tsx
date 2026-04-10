import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, AlertTriangle, Clock, CheckCircle } from "lucide-react";
import { certifications, inspections, products } from "@/lib/demo-data";

const Alerts = () => {
  const expiringProducts = products.filter((p) => {
    const exp = new Date(p.expiryDate);
    const now = new Date();
    const diff = (exp.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
    return diff < 60 && diff > 0;
  });

  const failedInspections = inspections.filter((i) => i.status === "failed");
  const expiredCerts = certifications.filter((c) => c.status === "expired" || c.status === "suspended");

  const alerts = [
    ...expiringProducts.map((p) => ({
      type: "warning" as const,
      title: `Product expiring soon: ${p.name}`,
      detail: `Expiry: ${p.expiryDate} | Batch: ${p.batchNumber}`,
      icon: Clock,
    })),
    ...failedInspections.map((i) => ({
      type: "danger" as const,
      title: `Inspection failed: ${i.productName}`,
      detail: `${i.location} | ${i.findings}`,
      icon: AlertTriangle,
    })),
    ...expiredCerts.map((c) => ({
      type: "danger" as const,
      title: `Certification ${c.status}: ${c.productName}`,
      detail: `Cert #${c.certNumber} | ${c.manufacturer}`,
      icon: Bell,
    })),
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Alerts</h1>
        <p className="text-sm text-muted-foreground">{alerts.length} active alerts</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <Clock className="h-5 w-5 text-warning" />
            <div>
              <p className="text-sm text-muted-foreground">Expiring Products</p>
              <p className="text-xl font-bold text-foreground">{expiringProducts.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <div>
              <p className="text-sm text-muted-foreground">Failed Inspections</p>
              <p className="text-xl font-bold text-foreground">{failedInspections.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <Bell className="h-5 w-5 text-destructive" />
            <div>
              <p className="text-sm text-muted-foreground">Cert Issues</p>
              <p className="text-xl font-bold text-foreground">{expiredCerts.length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-3">
        {alerts.map((alert, i) => (
          <Card key={i} className={`border-l-4 ${
            alert.type === "danger" ? "border-l-destructive" : "border-l-warning"
          }`}>
            <CardContent className="flex items-start gap-3 p-4">
              <alert.icon className={`mt-0.5 h-5 w-5 shrink-0 ${
                alert.type === "danger" ? "text-destructive" : "text-warning"
              }`} />
              <div>
                <p className="font-medium text-foreground">{alert.title}</p>
                <p className="text-sm text-muted-foreground">{alert.detail}</p>
              </div>
            </CardContent>
          </Card>
        ))}
        {alerts.length === 0 && (
          <Card>
            <CardContent className="flex items-center gap-3 p-8 justify-center">
              <CheckCircle className="h-6 w-6 text-success" />
              <p className="text-muted-foreground">No active alerts</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Alerts;
