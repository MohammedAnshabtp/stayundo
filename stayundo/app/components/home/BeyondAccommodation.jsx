export default function BeyondAccommodation() {
  return (
    <main className="bg-[#faf8ff] text-[#131b2e] overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-200 px-4 py-2">
              <span>🏠</span>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Beyond Accommodation
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              A New Place Needs More Than{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                Four Walls
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Finding a room is only the beginning. A student moving to Kochi, a
              professional relocating to Bangalore, or a traveler starting a new
              journey all face the same question:
              <span className="text-indigo-600 italic font-semibold">
                {" "}
                &quot;What comes next?&quot;
              </span>
            </p>

            <div className="rounded-2xl border-l-4 border-indigo-600 bg-white/70 backdrop-blur-xl p-6 shadow-sm">
              <p className="italic text-slate-700">
                Starting from scratch can be expensive. That&apos;s why StayUndo
                is building a community marketplace where people can buy, sell,
                exchange, and discover everything needed for a comfortable stay.
              </p>
            </div>

            <div className="space-y-4">
              <button className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 px-8 py-4 font-semibold text-white shadow-xl">
                Explore Essentials →
              </button>

              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Coming Soon Across Kerala
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[650px]">
            {/* Sleep Better */}
            <div className="col-span-3 row-span-3 rounded-3xl overflow-hidden relative bg-gradient-to-br from-slate-700 to-slate-900">
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-4 left-4 z-10 text-white">
                <h3 className="text-2xl font-bold">Sleep Better</h3>
                <p className="text-sm text-white/70">
                  Beds, Mattresses & Essentials
                </p>
              </div>
            </div>

            {/* Cook Comfortably */}
            <div className="col-span-3 row-span-2 rounded-3xl overflow-hidden relative bg-gradient-to-br from-orange-500 to-red-500">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Cook Comfortably</h3>
              </div>
            </div>

            {/* Transport */}
            <div className="col-span-2 row-span-3 rounded-3xl overflow-hidden relative bg-gradient-to-br from-cyan-500 to-blue-600">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm font-semibold uppercase">
                  Daily Transport
                </h3>
              </div>
            </div>

            {/* Work & Study */}
            <div className="col-span-4 row-span-4 rounded-3xl overflow-hidden relative bg-gradient-to-br from-indigo-600 to-purple-700">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold">Work & Study</h3>
                <p className="text-white/70">Tables, Chairs & Electronics</p>
              </div>
            </div>

            {/* Home CTA */}
            <div className="col-span-3 row-span-1 rounded-3xl bg-indigo-600 flex items-center justify-center text-white font-semibold">
              Feel Like Home
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-[#f2f3ff] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-indigo-600" />
                <span className="uppercase tracking-[0.25em] text-indigo-600 text-sm font-semibold">
                  The Mission
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Build Your New Life,
                <span className="italic text-emerald-600">
                  {" "}
                  Not Just Your New Room
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Why Buy Everything New?
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    Thousands of students and professionals leave cities every
                    year, while thousands arrive looking for the same
                    essentials. StayUndo helps connect both sides.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Affordable Buyers",
                    "Extra Income",
                    "Better For Planet",
                    "Community Focused",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-white p-4 text-center shadow-sm"
                    >
                      <div className="font-medium">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] bg-white p-10 shadow-2xl border border-indigo-100">
                <div className="absolute right-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs text-white font-semibold">
                  Coming Soon
                </div>

                <h4 className="text-slate-500 mb-2">StayUndo Essentials</h4>

                <h3 className="text-5xl font-bold text-indigo-600 mb-8">
                  Marketplace
                </h3>

                <div className="space-y-4">
                  {["Buy Essentials", "Sell Items", "Exchange Program"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl bg-slate-50 p-4 hover:bg-white border"
                      >
                        <span>{item}</span>
                        <span>›</span>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-8 flex justify-center gap-3 text-xs uppercase tracking-widest text-slate-400">
                  <span>Buy</span>
                  <span>•</span>
                  <span>Sell</span>
                  <span>•</span>
                  <span>Exchange</span>
                  <span>•</span>
                  <span>Discover</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 text-7xl text-indigo-200">&quot;</div>

          <blockquote className="text-4xl lg:text-5xl font-bold leading-tight text-slate-700">
            Your journey doesn&apos;t start when you find a room.
            <br />
            It starts when that room begins to
            <span className="italic text-indigo-600"> feel like home.</span>
          </blockquote>

          <div className="mx-auto mt-10 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500" />
        </div>
      </section>
    </main>
  );
}
