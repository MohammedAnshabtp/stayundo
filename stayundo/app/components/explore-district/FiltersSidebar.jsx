"use client";

export default function FiltersSidebar() {
  return (
    <aside className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="font-semibold">Filters</h3>

        <button className="text-xs text-indigo-600">
          Reset
        </button>
      </div>

      <div className="space-y-8">
        <div>
          <p className="mb-3 text-xs font-semibold text-gray-400">
            GENDER PREFERENCE
          </p>

          <div className="flex gap-2">
            <button className="rounded-full border px-4 py-2 text-sm">
              Male
            </button>

            <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm text-white">
              Female
            </button>

            <button className="rounded-full border px-4 py-2 text-sm">
              Any
            </button>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold text-gray-400">
            ESSENTIALS
          </p>

          <div className="space-y-2">
            {[
              "High Speed WiFi",
              "Air Conditioning",
              "Food Included",
              "Laundry",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2"
              >
                <input type="checkbox" defaultChecked />
                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold text-gray-400">
            SUITABLE FOR
          </p>

          <div className="space-y-3">
            <label className="flex items-center justify-between rounded-lg border p-3">
              Student Friendly
              <input type="radio" name="group" />
            </label>

            <label className="flex items-center justify-between rounded-lg border p-3">
              Working Professionals
              <input
                type="radio"
                name="group"
                defaultChecked
              />
            </label>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold text-gray-400">
            SECURITY DEPOSIT
          </p>

          <input
            type="range"
            min="0"
            max="50000"
            className="w-full"
          />

          <div className="mt-2 flex justify-between text-xs text-gray-400">
            <span>₹0</span>
            <span>₹50,000</span>
          </div>
        </div>
      </div>
    </aside>
  );
}