import { API_URL } from "@/config/apiUrl";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { userAtom } from "@/context/user";
import { useNavigate } from "react-router-dom";

interface useAuthProps {
  name?: string;
  email: string;
  password: string;
}



export const useAuth = ({ name, email, password }: useAuthProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);

  async function currentUser() {}

  async function handleLogin() {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    localStorage.setItem("user", JSON.stringify(data.user));
    Cookies.set("token", data.token); //buat menyimpan data token kedalam cookies

    setUser(data.token);
    navigate("/", { replace: true });
  }

  async function handleRegister() {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    console.log(data);
    return data;
  }

  useEffect(() => {}, []);
  return { handleRegister, handleLogin, user };
};
