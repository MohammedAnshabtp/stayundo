"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("registeredUser", JSON.stringify(form));

    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto py-20 space-y-4">
      <input
        placeholder="Name"
        className="border w-full p-3 rounded-xl"
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        className="border w-full p-3 rounded-xl"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        className="border w-full p-3 rounded-xl"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <button className="bg-indigo-600 text-white w-full p-3 rounded-xl">
        Register
      </button>
    </form>
  );
}
