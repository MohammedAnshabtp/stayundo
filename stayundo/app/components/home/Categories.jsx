import { categories } from "../../data/categories";

export default function Categories() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Popular Categories</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-sm border hover:shadow-lg transition"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-4 font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
