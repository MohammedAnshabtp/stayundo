/* eslint-disable @next/next/no-img-element */
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
              className="group relative h-80 overflow-hidden rounded-3xl shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Glass Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4">
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>

                  <p className="text-white/70 text-sm mt-1">
                    Explore premium {item.title.toLowerCase()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
