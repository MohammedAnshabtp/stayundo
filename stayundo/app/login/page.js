"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("registeredUser"));

    if (user?.email === email && user?.password === password) {
      login(user);
      router.push("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto py-20 space-y-4">
      <input
        className="border p-3 w-full rounded-xl"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-3 w-full rounded-xl"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-indigo-600 text-white p-3 w-full rounded-xl">
        Login
      </button>
    </form>
  );
}
