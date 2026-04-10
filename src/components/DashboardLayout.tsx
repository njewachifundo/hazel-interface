import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import AppSidebar from "./AppSidebar";

const DashboardLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
