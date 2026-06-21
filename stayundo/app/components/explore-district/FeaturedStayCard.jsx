import Image from "next/image";

export default function FeaturedStayCard() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm lg:grid lg:grid-cols-2">
      <div className="relative h-80">
        <Image
          src="/images/villa1.png"
          alt="Villa"
          fill
          className="object-cover"
        />

        <span className="absolute left-4 top-4 rounded-full bg-violet-600 px-4 py-1 text-xs text-white">
          FEATURED SELECTION
        </span>
      </div>

      <div className="p-8">
        <div className="flex items-start justify-between">
          <h2 className="text-4xl font-bold">
            Wayanad
            <br />
            Nomad Villa
          </h2>

          <div className="text-right">
            <p className="text-4xl font-bold text-indigo-600">
              ₹22,000
            </p>

            <p className="text-sm text-gray-400">
              PER MONTH
            </p>
          </div>
        </div>

        <p className="mt-6 text-gray-600">
          Experience the ultimate work-from-paradise.
          High-speed internet, organic farm-to-table
          meals and private workspace pools included.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <div>✓ 100Mbps Satellite</div>
          <div>✓ Organic Meals</div>
          <div>✓ Quiet Zones</div>
          <div>✓ Infinity Pool</div>
        </div>

        <button className="mt-8 w-full rounded-xl bg-indigo-600 py-4 font-semibold text-white">
          Book Viewing
        </button>
      </div>
    </div>
  );
}