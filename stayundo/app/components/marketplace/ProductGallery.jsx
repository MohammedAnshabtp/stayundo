/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182",
  "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8",
  "https://images.unsplash.com/photo-1511994298241-608e28f14fde",
  "https://images.unsplash.com/photo-1485965120184-e220f721d03e",
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section>
      <div className="aspect-[16/10] overflow-hidden rounded-2xl">
        <img
          src={selectedImage}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {images.map((image) => (
          <button
            key={image}
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
              className="aspect-square w-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
