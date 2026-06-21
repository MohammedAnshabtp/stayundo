/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  Sofa,
  Laptop,
  BookOpen,
  Car,
  Package,
  WashingMachine,
  ShieldCheck,
  MessageSquare,
  ClipboardList,
} from "lucide-react";

const categories = [
  { name: "Furniture", icon: Sofa },
  { name: "Electronics", icon: Laptop },
  { name: "Kitchen", icon: Package },
  { name: "Vehicles", icon: Car },
  { name: "Study Materials", icon: BookOpen },
  { name: "Appliances", icon: WashingMachine },
];

const listings = [
  {
    id: 1,
    title: "Ergonomic Study Chair",
    price: "₹4,500",
    district: "Ernakulam",
    time: "2h ago",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hgvbMpuPcAdDOx4AxTdgGHRiTHbqd6sGarMMo9Z0BIE_l8ByjLLzV2Q&s=10",
  },
  {
    id: 2,
    title: "Dorm Induction Cooktop",
    price: "₹1,800",
    district: "Kozhikode",
    time: "5h ago",
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1200",
  },
  {
    id: 3,
    title: "Pre-loved Textbooks",
    price: "₹950",
    district: "Thrissur",
    time: "1 day ago",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200",
  },
];
const trustItems = [
  {
    title: "Verified Local Sellers",
    icon: ShieldCheck,
    description: "Every seller is linked to their StayUndo profile.",
  },
  {
    title: "Safe Peer-to-Peer Chat",
    icon: MessageSquare,
    description: "Communicate securely before making purchases.",
  },
  {
    title: "Easy Listing Management",
    icon: ClipboardList,
    description: "Manage listings, edits and availability easily.",
  },
];

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-[#f8f7fc]">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Second-hand Essentials,
              <span className="block text-indigo-600">First-class Deals.</span>
            </h1>

            <p className="text-gray-500 mt-5 max-w-xl">
              Buy and sell furniture, electronics, study materials and more
              within your trusted Kerala community.
            </p>

            <div className="flex gap-4 mt-8">
              <input
                placeholder="Search for furniture..."
                className="flex-1 bg-white border rounded-xl px-4 py-3"
              />

              <Link
                href="/marketplace/create"
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
              >
                Post Ad
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 mt-5">
              {["Study Tables", "Books", "Cycles"].map((item) => (
                <span
                  key={item}
                  className="bg-white border rounded-full px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600"
              alt="Marketplace"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8">Browse Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                className="bg-white border rounded-2xl p-6 hover:border-indigo-500 transition"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-indigo-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>

                <p className="text-sm font-medium mt-4">{category.name}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Listings</h2>

          <button className="text-indigo-600 text-sm font-medium">
            View All →
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {listings.map((item) => (
            <Link
              key={item.id}
              href={`/marketplace/${item.id}`}
              className="group bg-white rounded-3xl overflow-hidden border hover:shadow-xl transition"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{item.title}</h3>

                  <span className="text-xs text-gray-500">{item.time}</span>
                </div>

                <p className="text-gray-500 text-sm mt-2">{item.district}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-lg">{item.price}</span>

                  <button className="text-indigo-600 text-sm font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-slate-950 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-center text-4xl font-bold">
            Trade with Confidence
          </h2>

          <p className="text-center text-slate-400 mt-4 max-w-2xl mx-auto">
            StayUndo Marketplace is built specifically for the Kerala community,
            ensuring safe and quality transactions.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
                >
                  <div className="w-14 h-14 rounded-xl bg-indigo-600 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="font-semibold text-xl">{item.title}</h3>

                  <p className="text-slate-400 mt-3 text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
