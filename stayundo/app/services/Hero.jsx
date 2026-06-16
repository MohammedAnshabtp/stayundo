export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4 md:px-12 bg-[#faf8ff]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(70,72,212,0.05) 0%, rgba(250,248,255,1) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6cf8bb]/20 border border-[#006c49]/10 mb-8">
          <span className="text-[#006c49] text-sm">✓</span>

          <span className="text-xs font-semibold tracking-wider text-[#00714d]">
            PREMIUM GUEST SERVICES KERALA
          </span>
        </div>

        <h1 className="max-w-5xl mx-auto text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
          Everything You Need,
          <br />
          <span className="bg-gradient-to-r from-[#4648d4] to-[#a855f7] bg-clip-text text-transparent">
            Right Where You Stay.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-[#464554] text-lg leading-8 mb-12">
          Beyond a room, we provide the essential services to help you settle in
          Kerala without the stress.
        </p>

        <div className="relative max-w-xl mx-auto">
          <input
            className="w-full pl-12 pr-32 py-5 rounded-2xl bg-white shadow-sm border border-[#c7c4d7] focus:outline-none focus:ring-2 focus:ring-[#4648d4]"
            placeholder="Search for a service..."
          />

          <button className="absolute top-2 bottom-2 right-2 px-6 rounded-xl bg-[#4648d4] text-white font-semibold">
            Search
          </button>
        </div>
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#4648d4]/5 blur-[120px] rounded-full" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#a855f7]/5 blur-[150px] rounded-full" />
    </section>
  );
}
