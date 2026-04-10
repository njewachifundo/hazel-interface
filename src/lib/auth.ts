// Demo authentication context - no backend needed
import { createContext, useContext } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "inspector" | "lab_personnel" | "supervisor";
}

export const DEMO_USERS: Record<string, { password: string; user: User }> = {
  "admin@mbs.gov.mw": {
    password: "admin123",
    user: { id: "1", email: "admin@mbs.gov.mw", name: "Admin User", role: "admin" },
  },
  "inspector@mbs.gov.mw": {
    password: "inspector123",
    user: { id: "2", email: "inspector@mbs.gov.mw", name: "James Banda", role: "inspector" },
  },
  "lab@mbs.gov.mw": {
    password: "lab123",
    user: { id: "3", email: "lab@mbs.gov.mw", name: "Mary Phiri", role: "lab_personnel" },
  },
  "supervisor@mbs.gov.mw": {
    password: "supervisor123",
    user: { id: "4", email: "supervisor@mbs.gov.mw", name: "Grace Chirwa", role: "supervisor" },
  },
};

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
  isAuthenticated: false,
});

export const useAuth = () => useContext(AuthContext);
