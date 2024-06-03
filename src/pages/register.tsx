import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

Input;

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { handleRegister } = useAuth(user);
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[320px] space-y-2">
        <section>
          <h2>Register</h2>
          <p>Create an account to get started</p>
        </section>
        <Input
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        ></Input>
        <Input
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></Input>
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></Input>
        <Button className="w-full" onClick={handleRegister}>
          Register
        </Button>

        <section>
          Already have an account?{" "}
          <Link to={"/login"} className="font-bold text-green-500">
            Login
          </Link>
        </section>
      </div>
    </main>
  );
}
