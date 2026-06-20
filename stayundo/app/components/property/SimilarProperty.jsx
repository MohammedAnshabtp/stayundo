import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


export default function SimilarProperty() {
  const similarProperties = [
    {
      title: "Misty Cloud Pavilion",
      location: "Wayanad",
      type: "Luxury Treehouse",
      price: "₹18,200",
      rating: 4.8,
      image: "/images/property4.png",
    },
    {
      title: "Azure Shore Villa",
      location: "Varkala",
      type: "Beachfront Modern",
      price: "₹22,000",
      rating: 4.7,
      image: "/images/property5.png",
    },
    {
      title: "The Spice Heritage Loft",
      location: "Munnar",
      type: "Plantation Estate",
      price: "₹15,500",
      rating: 4.9,
      image: "/images/property6.png",
    },
  ];
  return (
    <div className="my-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-900">
          Similar Properties
        </h2>

        <div className="flex gap-3">
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-500 hover:text-violet-600">
            <ChevronLeft size={18} />
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-500 hover:text-violet-600">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {similarProperties.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/95 px-3 py-2 backdrop-blur">
                <div>
                  <span className="font-semibold">{item.price}</span>

                  <span className="text-xs text-gray-500"> / night</span>
                </div>

                <div className="text-sm">⭐ {item.rating}</div>
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-semibold">{item.title}</h3>

              <p className="mt-2 text-sm text-gray-500">
                {item.location} • {item.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
