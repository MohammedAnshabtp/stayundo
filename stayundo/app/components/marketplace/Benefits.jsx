import { benefits } from "../../data/benefits";

export default function Benefits() {
  return (
    <section className="bg-[#eef0f8] py-12">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
        {benefits.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <Icon className="mb-4 text-violet-500" size={22} />

              <h3 className="font-semibold text-slate-900">{item.title}</h3>

              <p className="mt-2 text-sm text-gray-500">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
