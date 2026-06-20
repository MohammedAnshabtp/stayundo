/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-600">
            Used Essentials Marketplace
          </span>

          <h1 className="mt-6 max-w-xl text-5xl font-bold leading-tight text-slate-900">
            Furnish Your Stay Without Emptying Your Wallet
          </h1>

          <p className="mt-6 max-w-lg text-gray-500">
            Find premium used furniture, appliances, and electronics vetted for
            quality. Seamlessly transition into your new Kerala stay with
            everything you need, from trusted neighbors and student communities.
          </p>

          <div className="mt-8 flex gap-4">
            <button className=" flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-700">
              Start Shopping
              <ArrowRight />
            </button>

            <button className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
              List Your Item
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="rounded-2xl bg-white p-4 shadow-xl">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/sofa-with-table.png"
              alt="Furniture"
              className="h-[350px] w-full object-cover"
            />
          </div>

          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-xs text-gray-500">Sofa + Table Bundle</p>
              <p className="text-3xl font-bold text-violet-600">₹12,499</p>
            </div>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600">
              VERIFIED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
