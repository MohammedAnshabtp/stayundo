/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock3,
  Star,
  ShieldCheck,
  MessageCircle,
  Bookmark,
} from "lucide-react";

import { products } from "../../data/marketplaceData";

export default function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(
    product?.gallery?.[0] || product?.image || ""
  );

  return (
    <main className="min-h-screen bg-[#f8f7fc]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-8">
            {/* Gallery */}
            <div className="bg-white rounded-3xl p-4 border">
              <div className="rounded-2xl overflow-hidden h-[500px]">
                <img
                  src={selectedImage}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-4 mt-4">
                {product.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`overflow-hidden rounded-xl border-2 ${
                      selectedImage === image
                        ? "border-indigo-600"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-24 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">{product.title}</h1>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  {product.condition}
                </span>
              </div>

              <div className="flex flex-wrap gap-6 mt-5 text-gray-500">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  {product.district}
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={18} />
                  {product.time}
                </div>
              </div>

              <p className="text-gray-600 mt-8 leading-8">
                {product.description}
              </p>
            </div>

            {/* Specs */}
            <div className="mt-10 bg-white border rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6">Specifications</h2>

              <div className="grid md:grid-cols-2 gap-5">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-3">
                    <span className="text-gray-500">{key}</span>

                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="bg-white rounded-3xl border p-8 shadow-sm">
                <p className="text-gray-500 uppercase text-sm">Fixed Price</p>

                <h2 className="text-5xl font-bold text-indigo-600 mt-2">
                  {product.price}
                </h2>

                {/* Seller */}
                <div className="bg-gray-50 rounded-2xl p-4 mt-8">
                  <div className="flex gap-4 items-center">
                    <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center">
                      👤
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{product.seller}</p>

                        <ShieldCheck size={18} className="text-indigo-600" />
                      </div>

                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Star
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        {product.rating}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-8">
                  <button className="w-full bg-indigo-600 text-white py-4 rounded-xl flex justify-center items-center gap-2">
                    <MessageCircle size={18} />
                    Chat Seller
                  </button>

                  <button className="w-full border border-indigo-600 text-indigo-600 py-4 rounded-xl flex justify-center items-center gap-2">
                    <Bookmark size={18} />
                    Save Item
                  </button>
                </div>
              </div>

              {/* Safety */}
              <div className="mt-6 bg-yellow-50 rounded-3xl p-6 border border-yellow-200">
                <h3 className="font-semibold mb-4">Safety Tips</h3>

                <ul className="space-y-3 text-sm text-gray-600">
                  <li>✓ Meet in a public place</li>
                  <li>✓ Verify product before payment</li>
                  <li>✓ Use secure digital payments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <section className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Similar Listings</h2>

              <p className="text-gray-500 mt-2">
                Curated recommendations from verified sellers
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((item) => item.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/marketplace/${item.id}`}
                  className="group bg-white rounded-3xl overflow-hidden border hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-indigo-600">
                      Verified
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-lg line-clamp-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                      {item.district}
                    </p>

                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-xl text-indigo-600">
                        {item.price}
                      </span>

                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
