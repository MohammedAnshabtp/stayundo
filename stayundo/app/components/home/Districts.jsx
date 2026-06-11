import { districts } from "../../data/districts";

export default function Districts() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Explore Kerala</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {districts.map((district) => (
            <div
              key={district}
              className="h-52 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-3xl flex items-center justify-center text-white text-3xl font-bold"
            >
              {district}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
