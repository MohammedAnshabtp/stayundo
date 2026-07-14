"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthStepper from "../../components/AuthLayout/AuthStepper";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    const savedData = sessionStorage.getItem("signupData");

    if (savedData) {
      const data = JSON.parse(savedData);

      setFormData({
        fullName: data.fullName || "",
        email: data.email || "",
        phone: data.phone || "",
        password: data.password || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    sessionStorage.setItem("signupData", JSON.stringify(formData));
    router.push("/verification");
  };

  return (
    <>
      <AuthStepper currentStep={1} />

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
    </>
  );
}
