"use client";

import { useState } from "react";

export default function SearchBar() {
  const [district, setDistrict] = useState("");

  return (
    <div className="bg-white mt-10 rounded-3xl shadow-xl p-5">
      <div className="grid md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Location"
          className="border p-3 rounded-xl"
        />

        <select
          className="border p-3 rounded-xl"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        >
          <option>Select District</option>
          <option>Malappuram</option>
          <option>Kozhikode</option>
          <option>Ernakulam</option>
        </select>

        <select className="border p-3 rounded-xl">
          <option>Property Type</option>
        </select>

        <button className="bg-indigo-600 text-white rounded-xl">Search</button>
      </div>
    </div>
  );
}
