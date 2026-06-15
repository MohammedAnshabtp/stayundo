import { marketplace_categories } from "../../data/marketplace_categories";

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Browse by Category
        </h2>

        <p className="mt-4 text-gray-500">
          Everything you need to transform a house into a home, organized for
          easy discovery.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {marketplace_categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.title}
              className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Icon size={22} className="mb-4 text-violet-500" />

              <h3 className="font-semibold text-slate-900">{category.title}</h3>

              <ul className="mt-3 space-y-1 text-sm text-gray-500">
                {category.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
