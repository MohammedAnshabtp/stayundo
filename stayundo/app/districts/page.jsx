/* eslint-disable @next/next/no-img-element */
const districts = [
  {
    name: "Ernakulam",
    listings: "2,500+ Listings",
    image:
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=1200",
  },
  {
    name: "Kozhikode",
    listings: "1,800+ Listings",
    image:
      "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=1200",
  },
  {
    name: "Thrissur",
    listings: "1,600+ Listings",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
  },
  {
    name: "Malappuram",
    listings: "1,300+ Listings",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200",
  },
];

export default function DistrictsPage() {
  return (
    <main className="bg-[#f8f7fc] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full">
          Explore Kerala
        </span>

        <h1 className="text-6xl font-bold mt-8">Discover Every District</h1>

        <p className="text-gray-600 max-w-2xl mx-auto mt-6">
          Browse accommodations, services, and marketplace listings across all
          districts of Kerala.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {districts.map((district) => (
            <div
              key={district.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition"
            >
              <img
                src={district.image}
                alt={district.name}
                className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">{district.name}</h3>

                <p className="text-gray-500 mt-2">{district.listings}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
