export default function CTASection() {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#faf8ff]">
      <div
        style={{
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(20px)",
        }}
        className="
            max-w-5xl
            mx-auto
            rounded-[40px]
            p-12
            md:p-16
            shadow-2xl
            relative
            overflow-hidden
          "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#4648d4]/10 to-[#a855f7]/5" />

        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6">Need a Custom Service?</h2>

          <p className="max-w-2xl mx-auto text-[#464554] mb-10">
            Can&apos;t find what you&apos;re looking for? Tell us your
            requirements and we&apos;ll arrange a tailored solution.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-[#4648d4] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all">
              Contact Support
            </button>

            <button className="bg-white/50 backdrop-blur-md border border-[#c7c4d7] px-10 py-4 rounded-full font-bold">
              View FAQs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
