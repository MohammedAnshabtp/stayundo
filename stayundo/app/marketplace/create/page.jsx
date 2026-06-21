/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import {
  Upload,
  Package,
  MapPin,
  IndianRupee,
  CheckCircle2,
} from "lucide-react";

export default function CreateAdPage() {
  const [images, setImages] = useState([]);

  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages(previews);
  };

  return (
    <main className="min-h-screen bg-[#f8f7fc] py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Post an <span className="text-indigo-600">Ad</span>
          </h1>

          <p className="text-gray-500 mt-3">
            Sell your products within Kerala&lsquo;s trusted community.
          </p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-12">
          {["Category", "Details", "Photos", "Review"].map((step, index) => (
            <div key={step} className="flex items-center flex-1 last:flex-none">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold
                  ${
                    index === 0
                      ? "bg-indigo-600 text-white"
                      : "bg-white border text-gray-500"
                  }`}
              >
                {index + 1}
              </div>

              <span className="ml-3 font-medium hidden md:block">{step}</span>

              {index < 3 && <div className="flex-1 h-[2px] bg-gray-200 mx-4" />}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
          <form className="space-y-10">
            {/* Category */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Package className="text-indigo-600" />
                <h2 className="text-2xl font-bold">Category</h2>
              </div>

              <div className="relative">
                <select className="w-full appearance-none bg-white border border-gray-200 rounded-2xl px-5 py-4 pr-12 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all">
                  <option>Select Category</option>
                  <option>Furniture</option>
                  <option>Electronics</option>
                  <option>Kitchen</option>
                  <option>Vehicles</option>
                  <option>Study Materials</option>
                  <option>Appliances</option>
                </select>

                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </section>

            {/* Details */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Item Details</h2>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Listing Title"
                  className="w-full border rounded-xl p-4"
                />

                <textarea
                  rows={5}
                  placeholder="Describe your item..."
                  className="w-full border rounded-xl p-4"
                />
              </div>
            </section>

            {/* Price & Location */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Price & Location</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <IndianRupee
                    size={18}
                    className="absolute left-4 top-4 text-gray-500"
                  />

                  <input
                    type="number"
                    placeholder="Price"
                    className="w-full border rounded-xl pl-10 p-4"
                  />
                </div>

                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-4 top-4 text-gray-500"
                  />

                  <select className="w-full border rounded-xl pl-10 p-4">
                    <option>Select District</option>
                    <option>Ernakulam</option>
                    <option>Thrissur</option>
                    <option>Kozhikode</option>
                    <option>Malappuram</option>
                    <option>Kannur</option>
                    <option>Palakkad</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Photos */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Photos</h2>

              <label className="border-2 border-dashed border-indigo-300 rounded-3xl p-12 flex flex-col items-center cursor-pointer hover:bg-indigo-50 transition">
                <Upload className="w-12 h-12 text-indigo-600" />

                <h3 className="font-semibold mt-4">Upload Photos</h3>

                <p className="text-gray-500 text-sm mt-2">
                  Click or drag images here
                </p>

                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleImages}
                />
              </label>

              {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image.preview}
                      alt=""
                      className="h-32 w-full rounded-xl object-cover"
                    />
                  ))}
                </div>
              )}
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Contact Preference</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <label className="border rounded-xl p-5 cursor-pointer hover:border-indigo-500">
                  <input
                    type="radio"
                    name="contact"
                    defaultChecked
                    className="mr-3"
                  />
                  In-App Chat Only
                </label>

                <label className="border rounded-xl p-5 cursor-pointer hover:border-indigo-500">
                  <input type="radio" name="contact" className="mr-3" />
                  Chat & Phone Call
                </label>
              </div>
            </section>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={20} />
              Publish Listing
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
