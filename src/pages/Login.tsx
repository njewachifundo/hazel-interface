import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import foodImg from "@/assets/food.jpg";
import logoImg from "@/assets/mbs-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      toast.success("Welcome back!");
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials. Try demo accounts below.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted p-4">
      <Card className="w-full max-w-4xl overflow-hidden shadow-xl">
        <div className="grid md:grid-cols-2">
          {/* Left side - branding */}
          <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 p-8">
            <img src={logoImg} alt="MBS Logo" className="mb-4 h-16 w-auto" />
            <img
              src={foodImg}
              alt="Food Quality"
              className="w-full max-w-xs rounded-xl object-cover shadow-lg"
              width={640}
              height={640}
            />
          </div>

          {/* Right side - form */}
          <CardContent className="flex flex-col justify-center p-8">
            <h1 className="mb-1 font-display text-2xl font-bold text-foreground">Login</h1>
            <p className="mb-6 text-sm text-muted-foreground">Food Quality Tracking System</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="username@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="text-right">
                <Link to="#" className="text-sm text-primary hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <Button type="submit" className="w-full">Sign in</Button>
            </form>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium text-primary hover:underline">
                Register
              </Link>
            </p>

            {/* Demo credentials */}
            <div className="mt-6 rounded-lg border border-border bg-muted/50 p-3">
              <p className="mb-2 text-xs font-semibold text-muted-foreground">DEMO CREDENTIALS</p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p><span className="font-medium">Admin:</span> admin@mbs.gov.mw / admin123</p>
                <p><span className="font-medium">Inspector:</span> inspector@mbs.gov.mw / inspector123</p>
                <p><span className="font-medium">Lab:</span> lab@mbs.gov.mw / lab123</p>
                <p><span className="font-medium">Supervisor:</span> supervisor@mbs.gov.mw / supervisor123</p>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Login;
