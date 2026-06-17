export default function TrustSection() {
  const items = [
    {
      icon: "✓",
      title: "Verified Partners Only",
      description:
        "Every service provider undergoes rigorous quality and background checks.",
    },
    {
      icon: "₹",
      title: "Transparent Pricing",
      description:
        "No hidden fees or surprise surges. Pay only what you see upfront.",
    },
    {
      icon: "🎧",
      title: "24/7 Priority Support",
      description:
        "Our dedicated team is always available to handle any service issues.",
    },
  ];
  return (
    <section className="py-24 bg-[#f2f3ff] border-y border-[#c7c4d7]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <h2 className="text-center text-4xl font-bold mb-20">
          Why Trust StayUndo Services?
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <div
                className="
                  w-20
                  h-20
                  rounded-full
                  bg-white
                  shadow-xl
                  flex
                  items-center
                  justify-center
                  mb-6
                "
              >
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">{item.title}</h3>

              <p className="text-[#464554]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
