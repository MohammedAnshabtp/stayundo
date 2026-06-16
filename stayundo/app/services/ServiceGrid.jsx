import ServiceCard from "./ServiceCard";
import { service } from "../data/service";

export default function ServiceGrid() {
  return (
    <section className="py-20 px-4 md:px-12 bg-[#faf8ff]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-[#131b2e] mb-2">
            Our Services
          </h2>

          <p className="text-[#464554]">Curated solutions for your stay.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.map((services) => (
            <ServiceCard key={services.id} service={services} />
          ))}
        </div>
      </div>
    </section>
  );
}
