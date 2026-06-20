/* eslint-disable @next/next/no-img-element */
const products = [
  {
    id: 1,
    title: "Trek Emonda SL 6",
    price: "₹2,80,000",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e",
  },
  {
    id: 2,
    title: "ErgoCraft Pro Desk",
    price: "₹45,000",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  },
];

export default function SimilarItems() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-8">Similar High-End Listings</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="aspect-square w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-indigo-600 font-bold mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
