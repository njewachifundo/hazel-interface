import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/auth";
import { dashboardStats, monthlyInspections, complianceByCategory, inspections, certifications } from "@/lib/demo-data";
import { Package, ClipboardCheck, Award, FlaskConical, AlertTriangle, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import StatusBadge from "@/components/StatusBadge";

const COLORS = ["hsl(142, 60%, 40%)", "hsl(0, 84%, 60%)", "hsl(38, 92%, 50%)"];

const statCards = [
  { label: "Total Products", value: dashboardStats.totalProducts, icon: Package, color: "text-info" },
  { label: "Active Inspections", value: dashboardStats.activeInspections, icon: ClipboardCheck, color: "text-warning" },
  { label: "Certified Products", value: dashboardStats.certifiedProducts, icon: Award, color: "text-success" },
  { label: "Pending Lab Results", value: dashboardStats.pendingLabResults, icon: FlaskConical, color: "text-primary" },
  { label: "Failed Inspections", value: dashboardStats.failedInspections, icon: AlertTriangle, color: "text-destructive" },
  { label: "Expiring Certs", value: dashboardStats.expiringCerts, icon: TrendingUp, color: "text-warning" },
];

const Dashboard = () => {
  const { user } = useAuth();

  const pieData = [
    { name: "Passed", value: inspections.filter(i => i.status === "passed").length },
    { name: "Failed", value: inspections.filter(i => i.status === "failed").length },
    { name: "Pending", value: inspections.filter(i => i.status === "pending").length },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Welcome back, {user?.name}</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {statCards.map((s) => (
          <Card key={s.label}>
            <CardContent className="flex items-center gap-4 p-5">
              <div className={`rounded-lg bg-muted p-3 ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Monthly Inspections</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={monthlyInspections}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,20%,90%)" />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Bar dataKey="passed" fill="hsl(142,60%,40%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="failed" fill="hsl(0,84%,60%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pending" fill="hsl(38,92%,50%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Inspection Results</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" label>
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent Inspections</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Product</th>
                    <th className="px-4 py-3 font-medium">Location</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {inspections.slice(0, 5).map((ins) => (
                    <tr key={ins.id} className="border-b last:border-0">
                      <td className="px-4 py-3 font-medium text-foreground">{ins.productName}</td>
                      <td className="px-4 py-3 text-muted-foreground">{ins.location}</td>
                      <td className="px-4 py-3"><StatusBadge status={ins.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Certification Status</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Product</th>
                    <th className="px-4 py-3 font-medium">Cert #</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {certifications.slice(0, 5).map((cert) => (
                    <tr key={cert.id} className="border-b last:border-0">
                      <td className="px-4 py-3 font-medium text-foreground">{cert.productName}</td>
                      <td className="px-4 py-3 text-muted-foreground">{cert.certNumber}</td>
                      <td className="px-4 py-3"><StatusBadge status={cert.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
