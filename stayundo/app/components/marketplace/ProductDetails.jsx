export default function ProductDetails() {
  return (
    <>
      <section>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            Specialized Turbo Levo Carbon G3
          </h1>

          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            Like New
          </span>
        </div>

        <div className="flex gap-4 text-gray-500 mt-4">
          <span>Kochi, Kerala</span>
          <span>•</span>
          <span>Posted 2 days ago</span>
        </div>

        <p className="mt-6 text-gray-600 leading-7">
          This 2024 Specialized Turbo Levo is a masterpiece of trail
          engineering. Meticulously maintained and primarily used for light
          weekend rides.
        </p>
      </section>

      <section className="bg-gray-50 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-6">Technical Specifications</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            ["Frame Material", "Fact 11m Carbon"],
            ["Motor", "Specialized 2.2 Custom"],
            ["Battery", "700Wh Integrated"],
            ["Wheel Size", '29" Front / 27.5" Rear'],
            ["Groupset", "SRAM X01 Eagle"],
            ["Suspension", "Fox Float 38 Factory"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between border-b pb-3">
              <span className="text-gray-500">{label}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
