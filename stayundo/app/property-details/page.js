import {
  MapPin,
  Star,
  Wifi,
  Waves,
  Snowflake,
  ChefHat,
  Calendar,
  Users,
} from "lucide-react";
import SimilarProperty from "../components/property/SimilarProperty"

const property = {
  title: "The Emerald Backwater Sanctuary",
  location: "Alappuzha, Kerala",
  rating: 4.9,
  reviews: 128,
  price: 24500,

  description:
    "Nestled along the tranquil veins of Alappuzha's legendary backwaters, The Emerald Sanctuary offers an unparalleled fusion of traditional Kerala craftsmanship and futuristic minimalism. Designed for discerning travelers, this property features automated climate control, high-speed fiber connectivity, and floor-to-ceiling glass facades that dissolve the boundary between you and the lush tropical horizon.",

  images: [
    "/images/property1.png",
    "/images/property2.png",
    "/images/property3.png",
  ],
};

const amenities = [
  {
    title: "Fiber Wi-Fi",
    icon: <Wifi size={22} />,
  },
  {
    title: "Infinity Pool",
    icon: <Waves size={22} />,
  },
  {
    title: "Smart AC",
    icon: <Snowflake size={22} />,
  },
  {
    title: "Private Chef",
    icon: <ChefHat size={22} />,
  },
];

const nearbyPlaces = [
  {
    name: "Vembanad Lake",
    distance: "1.2 km away",
    image: "/images/map_view.png",
  },
];

const reviews = [
  {
    id: 1,
    name: "Anjali Raman",
    initials: "AR",
    rating: 5,
    date: "2 days ago",
    review:
      "The integration of technology with the natural surroundings is breathtaking. Truly a premium Kerala curation.",
  },
];

export default function PropertyDetailsPage() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* GALLERY */}
        <div className="grid grid-cols-[2.2fr_1fr] gap-4">
          <div className="group overflow-hidden rounded-3xl">
            <img
              src={property.images[0]}
              alt=""
              className="h-[430px] w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
            />
          </div>

          <div className="space-y-4">
            <div className="group overflow-hidden rounded-3xl">
              <img
                src={property.images[1]}
                alt=""
                className="h-[207px] w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
              />
            </div>

            <div className="group relative overflow-hidden rounded-3xl">
              <img
                src={property.images[2]}
                alt=""
                className="h-[207px] w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
              />

              <button className="absolute bottom-4 right-4 rounded-full bg-white/95 px-4 py-2 text-xs font-medium shadow-lg">
                Show All Photos
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start mt-8">
          {/* LEFT CONTENT */}
          <div className="col-span-8">
            {/* TITLE */}

            <div className="mt-8">
              <h1 className="text-5xl font-bold text-slate-900">
                {property.title}
              </h1>

              <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  {property.location}
                </div>

                <span>•</span>

                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  {property.rating}
                </div>

                <span>({property.reviews} Reviews)</span>
              </div>
            </div>

            {/* DESCRIPTION */}

            <div className="mt-10">
              <h2 className="text-3xl font-bold text-slate-900">
                Experience Authentic Luxury
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                {property.description}
              </p>
            </div>

            {/* AMENITIES */}

            <div className="mt-12">
              <h2 className="mb-6 text-3xl font-bold">Premium Amenities</h2>

              <div className="grid grid-cols-4 gap-4">
                {amenities.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-4 flex justify-center text-violet-600">
                      {item.icon}
                    </div>

                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* REVIEWS */}

            <div className="mt-12">
              <div className="rounded-3xl bg-slate-50 p-6">
                <div className="mb-8 flex items-start justify-between">
                  <h2 className="text-3xl font-bold">Guest Reviews</h2>

                  <div className="text-right">
                    <div className="text-4xl font-bold text-violet-600">
                      4.9
                    </div>

                    <div className="text-xs text-gray-500">Global Rating</div>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="flex gap-4 border-b border-slate-200 pb-6 last:border-none last:pb-0"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-100 font-semibold text-violet-600">
                        {review.initials}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{review.name}</h4>

                          <span className="text-xs text-gray-500">
                            {review.date}
                          </span>
                        </div>

                        <div className="mt-1 text-yellow-500">
                          {"★".repeat(review.rating)}
                        </div>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          {review.review}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* EXPLORE NEARBY */}

            <div className="mt-12">
              <h2 className="mb-6 text-3xl font-bold">Explore Nearby</h2>

              <div className="overflow-hidden rounded-3xl bg-slate-50">
                <div className="relative h-[320px] group">
                  <img
                    src={nearbyPlaces[0].image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10" />

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white px-4 py-3 shadow-xl">
                    <h4 className="font-semibold">{nearbyPlaces[0].name}</h4>

                    <p className="text-xs text-gray-500">
                      {nearbyPlaces[0].distance}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - BOOKING CARD */}
          <div className="col-span-4">
            <div className="sticky top-8 rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-4xl font-bold">₹24,500</h3>

                  <span className="text-sm text-gray-500">/ night</span>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                  -15% EARLY BIRD
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs text-gray-400">
                    <Calendar size={14} />
                    CHECK IN / OUT
                  </div>

                  <p className="font-semibold">Oct 12 - Oct 15, 2026</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs text-gray-400">
                    <Users size={14} />
                    GUESTS
                  </div>

                  <p className="font-semibold">2 Adults, 1 Child</p>
                </div>
              </div>

              <div className="mt-8 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>₹24,500 × 3 nights</span>
                  <span>₹73,500</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Early Bird Discount</span>
                  <span>-₹11,025</span>
                </div>

                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span>₹2,400</span>
                </div>
              </div>

              <hr className="my-6 text-gray-200" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>

                <span className="text-violet-600">₹64,875</span>
              </div>

              <button className="mt-6 w-full rounded-2xl bg-violet-600 py-4 font-semibold text-white transition hover:bg-violet-700">
                Book Your Stay
              </button>

              <button className="mt-4 w-full rounded-2xl border border-gray-200 py-4 font-medium">
                Contact Host
              </button>
            </div>
          </div>
        </div>

        {/* SIMILAR PROPERTIES */}

        <SimilarProperty />
      </div>
    </section>
  );
}
