import FiltersSidebar from "../components/explore-district/FiltersSidebar";
import StayCard from "../components/explore-district/StayCard";
import FeaturedStayCard from "../components/explore-district/FeaturedStayCard";
import { stays } from "../data/stays";

export default function ExploreDistrictPage() {
  return (
    <section className="bg-[#f8f8fc] py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <FiltersSidebar />

          <div>
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  Premium Stays in Kochi
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Showing 42 verified accommodations
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {stays.map((stay) => (
                <StayCard key={stay.id} stay={stay} />
              ))}
            </div>

            <div className="mt-8">
              <FeaturedStayCard />
            </div>

            <div className="mt-10 text-center">
              <button className="rounded-full border border-indigo-500 px-8 py-3 text-indigo-600 transition hover:bg-indigo-50">
                View All Accommodations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
