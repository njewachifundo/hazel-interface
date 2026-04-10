import { Badge } from "@/components/ui/badge";

const statusColors: Record<string, string> = {
  certified: "bg-success/10 text-success border-success/30",
  active: "bg-success/10 text-success border-success/30",
  passed: "bg-success/10 text-success border-success/30",
  pass: "bg-success/10 text-success border-success/30",
  pending: "bg-warning/10 text-warning border-warning/30",
  expired: "bg-destructive/10 text-destructive border-destructive/30",
  rejected: "bg-destructive/10 text-destructive border-destructive/30",
  failed: "bg-destructive/10 text-destructive border-destructive/30",
  fail: "bg-destructive/10 text-destructive border-destructive/30",
  revoked: "bg-destructive/10 text-destructive border-destructive/30",
  suspended: "bg-warning/10 text-warning border-warning/30",
};

const StatusBadge = ({ status }: { status: string }) => (
  <Badge variant="outline" className={`capitalize ${statusColors[status] ?? ""}`}>
    {status}
  </Badge>
);

export default StatusBadge;
