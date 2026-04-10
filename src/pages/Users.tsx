import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DEMO_USERS } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";

const Users = () => {
  const users = Object.values(DEMO_USERS).map((d) => d.user);

  const roleColors: Record<string, string> = {
    admin: "bg-primary/10 text-primary border-primary/30",
    inspector: "bg-info/10 text-info border-info/30",
    lab_personnel: "bg-success/10 text-success border-success/30",
    supervisor: "bg-warning/10 text-warning border-warning/30",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Users</h1>
        <p className="text-sm text-muted-foreground">System users and roles</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-muted-foreground">
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{u.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{u.email}</td>
                  <td className="px-4 py-3">
                    <Badge variant="outline" className={`capitalize ${roleColors[u.role] ?? ""}`}>
                      {u.role.replace("_", " ")}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;
