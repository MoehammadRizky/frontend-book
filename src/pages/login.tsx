import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

Input;

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { handleLogin } = useAuth(user);
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[320px] space-y-2">
        <section>
          <h2>Login</h2>
          <p>Welcome Back!</p>
        </section>
        <Input
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></Input>
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></Input>
        <Button className="w-full" onClick={handleLogin}>Login</Button>

        <section>
          Don't have an account?{" "}
          <Link to={"/register"} className="font-bold text-green-500">
            Register
          </Link>
        </section>
      </div>
    </main>
  );
}
