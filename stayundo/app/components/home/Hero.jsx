/* eslint-disable @next/next/no-img-element */
import SearchBar from "./SearchBar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src="https://t4.ftcdn.net/jpg/01/28/57/63/360_F_128576315_ejpjSy7S7fsH275jCDuUtykU1O3B6rUb.jpg"
        alt="StayUndo Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-5xl px-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            Find Your Perfect Stay
          </h1>

          <p className="text-white/80 mt-4 text-lg">
            Stays, Rentals & Essentials Across Kerala
          </p>

          <div className="mt-14">
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
}
