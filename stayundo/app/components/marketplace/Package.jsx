import { Bed, Utensils, Monitor } from "lucide-react";

import PackageCard from "./PackageCard";

export default function Package() {
  return (
    <div className="bg-[#f2f2fd] px-6 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
              Special Offers
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Curation Move-in Packages
            </h2>
          </div>

          <button className="text-sm font-semibold text-indigo-600">
            View All Bundles →
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <PackageCard
            icon={<Bed size={20} />}
            title="Rest & Relax"
            description="Queen size frame + Orthopedic mattress + 2 Pillows"
            price="₹7,999"
            oldPrice="₹11,500"
          />

          <PackageCard
            icon={<Utensils size={20} />}
            title="Kitchen Starter"
            description="Induction cooktop + Mixer Grinder + 12pc Cookware set"
            price="₹4,499"
            oldPrice="₹8,200"
            featured
            badge="BEST SELLER"
          />

          <PackageCard
            icon={<Monitor size={20} />}
            title="Complete PG Setup"
            description="Ergonomic chair + Study desk + Table lamp + Router"
            price="₹6,299"
            oldPrice="₹9,000"
          />
        </div>
      </div>
    </div>
  );
}
