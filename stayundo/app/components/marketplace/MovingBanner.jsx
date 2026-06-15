import StatCard from "./StatCard";

export default function MovingBanner() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <section className="rounded-[32px] bg-[#020826] px-8 py-10 text-white lg:px-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-5xl font-bold">Just Moved In?</h2>

            <p className="mt-6 max-w-lg text-slate-300">
              Whether you're looking for that perfect study desk or clearing out
              your old AC before moving, Kerala's most trusted essential
              marketplace is here to help.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black">
                Browse Used Essentials
              </button>

              <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold">
                Sell Your Items
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard value="5k+" label="Active Listings" />
            <StatCard value="24h" label="Avg Sale Time" highlight />
            <StatCard value="12k" label="Verified Users" highlight />
            <StatCard value="100%" label="Payment Secure" />
          </div>
        </div>
      </section>
    </main>
  );
}
