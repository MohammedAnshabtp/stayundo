/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";

import Image from "next/image";

export default function ServiceCard({ service }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(20px)",
      }}
      className="
        rounded-[24px]
        overflow-hidden
        border
        border-white/20
        shadow-sm
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
        duration-300
        group
      "
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-[#4648d4]/10 flex items-center justify-center">
            {service.icon}
          </div>

          <h3 className="text-2xl font-bold text-[#131b2e]">{service.title}</h3>
        </div>

        <p className="text-[#464554] leading-7 mb-8">{service.description}</p>

        <button
          className="
            w-full
            py-3
            rounded-xl
            border
            border-[#4648d4]/20
            text-[#4648d4]
            font-semibold
            hover:bg-[#4648d4]
            hover:text-white
            transition-all
          "
        >
          {service.buttonText}
        </button>
      </div>
    </div>
  );
}
