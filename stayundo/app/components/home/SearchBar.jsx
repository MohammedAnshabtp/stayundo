"use client";

import { useState } from "react";

export default function SearchBar() {
  const [district, setDistrict] = useState("");
  const propertyTypes = [
    {
      label: "Shared Accommodation",
      options: ["Hostel", "Dormitory", "PG / Paying Guest", "Shared Room"],
    },
    {
      label: "Rental Properties",
      options: ["Daily Rent", "Weekly Rent", "Monthly Rent"],
    },
    {
      label: "Apartments",
      options: ["Studio Apartment", "1 BHK", "2 BHK", "3 BHK", "4+ BHK"],
    },
    {
      label: "Independent Properties",
      options: ["Villa", "House", "Farm House"],
    },
    {
      label: "Commercial",
      options: ["Office Space", "Shop", "Warehouse"],
    },
  ];

  return (
    <div className="mt-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-5">
      <div className="grid md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Location"
          className="bg-white/20 border border-white/20 text-white placeholder-white/70 p-3 rounded-xl outline-none focus:ring-2 focus:ring-white/30"
        />

        <select
          className="bg-white/20 border border-white/20 text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-white/30"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        >
          <option className="text-black">Select District</option>
          <option className="text-black">Malappuram</option>
          <option className="text-black">Kozhikode</option>
          <option className="text-black">Ernakulam</option>
        </select>

        <select className="bg-white/20 border border-white/20 text-white p-3 rounded-xl outline-none focus:ring-2 focus:ring-white/30">
          <option value="" className="text-black">
            Property Type
          </option>

          {propertyTypes.map((group) => (
            <optgroup key={group.label} label={group.label}>
              {group.options.map((option) => (
                <option key={option} value={option} className="text-black">
                  {option}
                </option>
              ))}
            </optgroup>
          ))}
        </select>

        <button className="bg-gradient-to-r from-indigo-600 to-emerald-500 text-white rounded-xl font-semibold hover:scale-105 transition">
          Search
        </button>
      </div>
    </div>
  );
}
