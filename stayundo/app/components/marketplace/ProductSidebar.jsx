/* eslint-disable @next/next/no-img-element */
export default function ProductSidebar() {
  return (
    <div className="sticky top-24">
      <div className="rounded-2xl border p-6 shadow-sm">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Fixed Price
        </p>

        <h2 className="text-5xl font-bold text-indigo-600 mt-2">₹4,25,000</h2>

        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl mt-6">
          <img
            src="https://i.pravatar.cc/100"
            alt="Seller"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h3 className="font-semibold">Arjun Nair</h3>
            <p className="text-sm text-gray-500">⭐ 4.9 (124 ratings)</p>
          </div>
        </div>

        <div className="space-y-3 mt-6">
          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
            Chat with Seller
          </button>

          <button className="w-full border border-indigo-600 text-indigo-600 py-3 rounded-xl">
            Save for Later
          </button>
        </div>
      </div>
    </div>
  );
}
