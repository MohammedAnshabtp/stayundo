"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../contexts/AuthContext";
import { ArrowLeft, Upload, IdCard, Vote, BadgeCheck } from "lucide-react";
import AuthStepper from "../../components/AuthLayout/AuthStepper";

export default function VerificationPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [idNumber, setIdNumber] = useState("");
  const [file, setFile] = useState(null);
  const [selectedId, setSelectedId] = useState("aadhaar");

  const idTypes = [
    {
      id: "aadhaar",
      label: "Aadhaar",
      icon: IdCard,
    },
    {
      id: "voter",
      label: "Voter ID",
      icon: Vote,
    },
    {
      id: "license",
      label: "License",
      icon: BadgeCheck,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // const registeredUser = JSON.parse(
    //   localStorage.getItem("registeredUser")
    // );
    const signupData = JSON.parse(sessionStorage.getItem("signupData"));

    const verifiedUser = {
      ...signupData,
      verification: {
        idType: selectedId,
        idNumber,
        file: file?.name || null,
        verified: true,
      },
    };

    // save final user
    localStorage.setItem("authUser", JSON.stringify(verifiedUser));
    localStorage.setItem("registeredUser", JSON.stringify(verifiedUser));

    // login user in context
    login(verifiedUser);

    sessionStorage.removeItem("signupData");
    router.push("/welcome");
  };

  return (
    <>
      {/* Stepper */}
      <AuthStepper currentStep={2} />

      {/* Card */}
      <div className="mx-auto mt-10 max-w-xl rounded-3xl bg-white p-8 shadow-xl">
        <button
          type="button"
          className="mb-6 flex items-center gap-2 text-sm text-violet-600"
          onClick={() => router.push("/signup")}
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <h2 className="text-3xl font-bold text-slate-800">
          Verify your identity
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          To ensure a safe community, please provide a valid government-issued
          ID.
        </p>

        <form onSubmit={handleSubmit}>
          {/* ID TYPE */}
          <div className="mt-8">
            <label className="mb-3 block text-xs font-medium tracking-wide text-gray-500">
              Select ID Type
            </label>

            <div className="grid grid-cols-3 gap-3">
              {idTypes.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className={`rounded-xl border p-4 transition ${
                      selectedId === item.id
                        ? "border-violet-500 bg-violet-50"
                        : "border-gray-200 hover:border-violet-300"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={`mx-auto mb-2 ${
                        selectedId === item.id
                          ? "text-violet-600"
                          : "text-gray-500"
                      }`}
                    />

                    <p className="text-sm font-medium">{item.label}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ID NUMBER */}
          <div className="mt-6">
            <label className="mb-2 block text-xs font-medium tracking-wide text-gray-500">
              ID Number
            </label>

            <input
              type="text"
              placeholder="Enter your ID number"
              onChange={(e) => setIdNumber(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-violet-500"
            />
          </div>

          {/* FILE UPLOAD */}
          <div className="mt-6">
            <label className="mb-2 block text-xs font-medium tracking-wide text-gray-500">
              Upload Proof of Identity
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 px-6 py-10 transition hover:border-violet-400">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100">
                <Upload size={24} className="text-violet-600" />
              </div>

              <p className="mt-4 font-medium text-gray-700">
                Click to upload or drag and drop
              </p>

              <p className="mt-2 text-xs text-gray-400">
                JPG, PNG or PDF (Max. 5MB)
              </p>

              <input
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 py-4 font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            Complete Verification
          </button>

          <button
            type="button"
            className="mt-4 w-full text-sm text-gray-500"
            onClick={() => router.push("/signup")}
          >
            Go Back
          </button>
        </form>
      </div>
    </>
  );
}
