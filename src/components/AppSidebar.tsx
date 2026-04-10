import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import {
  LayoutDashboard, Package, ClipboardCheck, FlaskConical, Award, ShieldCheck,
  LogOut, Bell, Settings, Users,
} from "lucide-react";
import logoImg from "@/assets/mbs-logo.png";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Products", icon: Package, path: "/products" },
  { label: "Inspections", icon: ClipboardCheck, path: "/inspections" },
  { label: "Lab Results", icon: FlaskConical, path: "/lab-results" },
  { label: "Certifications", icon: Award, path: "/certifications" },
  { label: "Compliance", icon: ShieldCheck, path: "/compliance" },
  { label: "Alerts", icon: Bell, path: "/alerts" },
  { label: "Users", icon: Users, path: "/users", adminOnly: true },
  { label: "Settings", icon: Settings, path: "/settings" },
];

const AppSidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <aside className="flex h-screen w-64 flex-col bg-sidebar text-sidebar-foreground">
      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-sidebar-border px-5 py-4">
        <img src={logoImg} alt="MBS" className="h-10 w-10 rounded" />
        <div>
          <p className="text-sm font-bold text-sidebar-primary-foreground">MBS FQTS</p>
          <p className="text-xs text-sidebar-foreground/60">Food Quality System</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navItems
            .filter((item) => !("adminOnly" in item) || user?.role === "admin")
            .map((item) => {
              const active = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>

      {/* User */}
      <div className="border-t border-sidebar-border p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar-primary text-sm font-bold text-sidebar-primary-foreground">
            {user?.name?.charAt(0) ?? "U"}
          </div>
          <div className="flex-1 truncate">
            <p className="text-sm font-medium text-sidebar-accent-foreground">{user?.name}</p>
            <p className="text-xs capitalize text-sidebar-foreground/60">{user?.role?.replace("_", " ")}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
