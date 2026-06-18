"use client";

import Image from "next/image";
import Link from "next/link";
import AuthStepper from "../../components/AuthLayout/AuthStepper";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function WelcomePage() {
  const user = JSON.parse(localStorage.getItem("authUser"));
  return (
    <>
      {/* Stepper */}
      <AuthStepper currentStep={3} />

      {/* Welcome Card */}
      <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[32px] bg-white shadow-xl">
        <div className="grid md:grid-cols-2">
          {/* LEFT */}
          <div className="flex flex-col justify-center p-10">
            <span className="mb-6 w-fit rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">
              Account Verified
            </span>

            <h1 className="text-4xl font-bold leading-tight text-slate-900">
              You're all set,
              <br />
              {user.fullName}
            </h1>

            <p className="mt-6 max-w-sm leading-7 text-slate-500">
              Welcome to StayUndo. Your gateway to Kerala's most
              premium and curated accommodations is now open.
              Start exploring backwater villas, misty plantation
              stays, and coastal escapes.
            </p>

            <div className="mt-10 space-y-3">
              <Link
                href="/"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 py-4 font-semibold text-white shadow-lg transition hover:opacity-90"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <button className="w-full rounded-xl bg-violet-50 py-4 font-semibold text-violet-600 transition hover:bg-violet-100">
                Explore Districts
              </button>
            </div>

            {/* Bottom Info */}
            <div className="mt-10 border-t border-gray-200 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img
                    src="/images/person1.png"
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-white"
                  />

                  <img
                    src="/images/person2.png"
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-white"
                  />

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-violet-500 text-xs font-bold text-white">
                    5k+
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Join 5,000+ travelers
                  </p>

                  <p className="text-xs text-slate-500">
                    discovering authentic Kerala experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[600px]">
            <Image
              src="/images/houseboat.png"
              alt="Kerala Houseboat"
              fill
              className="object-cover"
            />

            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/80 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                  <ShieldCheck
                    size={18}
                    className="text-violet-600"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Curated Choice
                  </p>

                  <p className="font-semibold text-slate-900">
                    Kumarakom Luxury Retreat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-10 text-center">
        <p className="text-sm text-slate-500">
          Need help getting started?{" "}
          <a
            href="#"
            className="font-medium text-violet-600 underline"
          >
            Visit our help center
          </a>
        </p>
      </div>
    </>
  );
}