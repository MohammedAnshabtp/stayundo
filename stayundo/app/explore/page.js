import Image from "next/image";
import { CheckCircle, ArrowRight, Map } from "lucide-react";
import { services } from "../data/services";
import { features } from "../data/features";

export default function ExplorePage() {
  return (
    <section className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid min-h-screen lg:grid-cols-[48%_52%]">
          {/* LEFT SECTION */}
          <div className="relative">
            <Image
              src="/images/student.png"
              alt="Student"
              fill
              className="object-cover"
            />

            {/* Quote Card */}
            <div className="absolute bottom-6 left-6 max-w-xs rounded-2xl bg-white/80 p-5 backdrop-blur">
              <p className="text-xs leading-6 text-gray-700">
                "വീട്ടിൽ നിന്ന് അകലെയായാലും, ജീവിതം എളുപ്പമാക്കാൻ ഒരാൾ ഉണ്ടെങ്കിൽ അതാണ് Stayundo."
              </p>

              <div className="mt-4 flex items-center gap-2">
                <div className="h-[2px] w-10 bg-emerald-500" />
                <span className="text-[10px] uppercase tracking-widest text-gray-600">
                  Our Promise To You
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center px-8 py-12 lg:px-14">
            <div className="w-full">
              <h1 className="max-w-lg text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                ഒരു പുതിയ
                <br />
                നഗരത്തിലേക്ക്
                <br />
                വരുമ്പോൾ,
                <br />
                <span className="text-violet-500">
                  താമസിക്കാൻ
                  <br />
                  ഒരു സ്ഥലം
                  <br />
                  മാത്രം
                  <br />
                  മതിയാകില്ല.
                </span>
              </h1>

              <p className="mt-6 max-w-md text-sm leading-6 text-gray-500">
                Whether you're a student, professional, or dreamer,
                finding a room is only the beginning. StayUndo helps
                you navigate what comes after every rupee counts.
              </p>

              {/* SERVICE CARDS */}
              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                {services.map((item) => (
                  <div
                    key={item.title}
                    className={`${item.border_color} rounded-xl border border-l-3 bg-white p-4 shadow-sm transition hover:shadow-md`}
                  >
                    <div className={item.color}>{item.icon}</div>

                    <p className="mt-3 whitespace-pre-line text-xs font-medium text-gray-700">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* FEATURES */}
              <div className="mt-8 grid grid-cols-1 gap-y-3 text-sm text-gray-600 md:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle
                      size={16}
                      className="text-emerald-500"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-violet-700">
                  Plan Your New Beginning 
                  <ArrowRight />
                </button>

                <button className=" flex items-center gap-2 rounded-xl border border-violet-200 px-8 py-4 text-sm font-semibold text-violet-600 transition hover:bg-violet-50">
                  Explore Your District 
                  <Map />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}