export default function AboutUsPage() {
  return (
    <main className="bg-[#f8f7fc] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm">
          About StayUndo
        </span>

        <h1 className="text-5xl font-bold mt-6">
          Kerala&lsquo;s Trusted Accommodation & Marketplace Platform
        </h1>

        <p className="text-gray-600 mt-6 max-w-3xl text-lg leading-8">
          StayUndo connects students, professionals, families, and travelers
          with quality accommodations, trusted marketplace listings, and local
          services across Kerala.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-3xl border">
            <h3 className="font-bold text-xl">Our Mission</h3>
            <p className="text-gray-600 mt-4">
              Simplify housing and local commerce for everyone.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border">
            <h3 className="font-bold text-xl">Our Vision</h3>
            <p className="text-gray-600 mt-4">
              Become Kerala&lsquo;s most trusted living ecosystem.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border">
            <h3 className="font-bold text-xl">Community First</h3>
            <p className="text-gray-600 mt-4">
              Safety, transparency, and verified listings.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
