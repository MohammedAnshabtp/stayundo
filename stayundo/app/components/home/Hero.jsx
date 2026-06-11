import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <img
        src={
          "https://www.wticabs.com:3001/global/app/v1/aws/getImage/offerimages/1737633139776_Places_to_visit_in_Kerela.png"
        }
        alt="Kerala"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-5xl px-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            Find Your Perfect Stay
          </h1>

          <p className="text-white/80 mt-4 text-lg">
            Stays, Rentals & Essentials Across Kerala
          </p>

          <SearchBar />
        </div>
      </div>
    </section>
  );
}
