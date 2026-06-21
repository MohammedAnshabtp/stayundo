/* eslint-disable @next/next/no-img-element */
import { services } from "../../data/services";

export default function Essentials() {
  const featuredItems = [
    {
      id: 1,
      title: "Mattress",
      price: "₹2,500",
      district: "Ernakulam",
      condition: "Like New",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
    },
    {
      id: 2,
      title: "Study Table",
      price: "₹1,800",
      district: "Kozhikode",
      condition: "Good",
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200",
    },
    {
      id: 3,
      title: "Induction Stove",
      price: "₹1,200",
      district: "Thrissur",
      condition: "Excellent",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200",
    },
    {
      id: 4,
      title: "Office Chair",
      price: "₹3,000",
      district: "Malappuram",
      condition: "Like New",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvjphUuCQkST_75Xa85HfxFBJnCYRicXSGkBlBmV0WYkl2cbDoyQDK6dc&s=10",
    },
  ];
  return (
    <section className="bg-[#faf8ff]">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
            Coming Soon
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Everything You Need To
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Feel At Home
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Buy, sell, rent and exchange furniture, appliances, study essentials
            and daily-use items with the StayUndo community.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-8">Browse Categories</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="group relative h-80 overflow-hidden rounded-3xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Essentials */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-8">Popular Essentials</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg">{item.title}</h3>

                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                    {item.condition}
                  </span>
                </div>

                <p className="text-gray-500 text-sm mt-2">📍 {item.district}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-indigo-600">
                    {item.price}
                  </span>

                  <button className="text-sm font-medium text-indigo-600 hover:underline">
                    View →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-16">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-indigo-100 mx-auto flex items-center justify-center font-bold text-indigo-600">
                1
              </div>

              <h3 className="mt-4 font-semibold">Browse Essentials</h3>

              <p className="text-gray-500 mt-2">
                Discover furniture, appliances and daily needs.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-indigo-100 mx-auto flex items-center justify-center font-bold text-indigo-600">
                2
              </div>

              <h3 className="mt-4 font-semibold">Connect Securely</h3>

              <p className="text-gray-500 mt-2">
                Contact verified sellers and renters.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-indigo-100 mx-auto flex items-center justify-center font-bold text-indigo-600">
                3
              </div>

              <h3 className="mt-4 font-semibold">Move In Comfortably</h3>

              <p className="text-gray-500 mt-2">
                Save money and settle faster.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-[40px] bg-gradient-to-r from-indigo-600 to-purple-600 p-[1px]">
          <div className="rounded-[39px] bg-white p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-indigo-600">Save 60%</h3>

                <p className="text-gray-500 mt-2">
                  Compared to buying everything new
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-indigo-600">Verified</h3>

                <p className="text-gray-500 mt-2">Trusted StayUndo community</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-indigo-600">
                  Eco Friendly
                </h3>

                <p className="text-gray-500 mt-2">Reduce waste through reuse</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-950 py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold text-white">
            Marketplace Launching Soon
          </h2>

          <p className="text-slate-400 mt-6">
            Be the first to buy, sell and exchange essentials within the
            StayUndo community.
          </p>

          <button className="mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold">
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
