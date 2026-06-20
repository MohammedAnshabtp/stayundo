export default function CareersPage() {
  const jobs = [
    "Frontend Developer",
    "UI/UX Designer",
    "Marketing Executive",
    "Customer Support Specialist",
  ];

  return (
    <main className="bg-[#f8f7fc] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold">
          Build the Future of Living in Kerala
        </h1>

        <p className="text-gray-600 mt-6 max-w-2xl">
          Join our growing team and help transform accommodation and local
          commerce.
        </p>

        <div className="mt-12 space-y-5">
          {jobs.map((job) => (
            <div
              key={job}
              className="bg-white border rounded-2xl p-6 flex justify-between"
            >
              <h3 className="font-semibold">{job}</h3>
              <button className="text-indigo-600">Apply →</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
