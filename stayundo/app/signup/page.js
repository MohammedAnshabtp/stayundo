"use client";

import { useState } from "react";
import Link from "next/link";
import { User, ShieldCheck, CheckCircle } from "lucide-react";
import Image from "next/image";
import Progressbar from "../components/common/Progressbar";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // later
    // dispatch(signup(formData))
    // router.push('/verification')
  };

  const steps = [
    {
      label: "Details",
      icon: User,
      active: true,
    },
    {
      label: "Verification",
      icon: ShieldCheck,
      active: false,
    },
    {
      label: "Welcome",
      icon: CheckCircle,
      active: false,
    },
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-violet-50 via-white to-emerald-50">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5">
        {/* <h1 className="text-lg font-bold text-indigo-600">
          StayUndo (സ്റ്റേയുണ്ടോ)
        </h1> */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpeg"
            alt="StayUndo Logo"
            width={160}
            height={50}
            priority
            className="object-contain"
          />
        </Link>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Already have an account?</span>

          <Link
            href="/login"
            className="rounded-lg border border-violet-200 px-4 py-2 text-violet-600 hover:bg-violet-50"
          >
            Login
          </Link>
        </div>
      </header>

      <Progressbar steps={steps} />

      {/* Card */}
      <div className="mx-auto mt-10 max-w-lg rounded-3xl bg-white p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800">
          Create your account
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Join Kerala's most exclusive premium accommodation network.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-medium text-gray-500">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium text-gray-500">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium text-gray-500">
              Phone Number
            </label>

            <div className="flex gap-2">
              <div className="w-20 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-center">
                +91
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium text-gray-500">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 py-4 font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            Continue to Verification
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-10 pb-8 text-center text-xs text-gray-400">
        <p>© 2026 StayUndo. Kerala's Premium Accommodation Gateway.</p>
        <div className="mt-2 flex justify-center gap-4">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}
