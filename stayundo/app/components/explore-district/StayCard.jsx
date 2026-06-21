import Image from "next/image";

export default function StayCard({ stay }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <div className="relative h-56">
        <Image
          src={stay.image}
          alt={stay.title}
          fill
          className="object-cover"
        />

        <span className="absolute left-3 top-3 rounded-full bg-indigo-600 px-3 py-1 text-xs text-white">
          {stay.quality}
        </span>

        {stay.verified && (
          <span className="absolute right-3 top-3 rounded-full bg-green-600 px-3 py-1 text-xs text-white">
            VERIFIED
          </span>
        )}

        <div className="absolute bottom-3 left-3 rounded-xl bg-black/50 px-3 py-2 text-white backdrop-blur">
          <p className="text-xs">{stay.distance}</p>
          <p className="font-bold">{stay.price}/mo</p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {stay.title}
          </h3>

          <span className="text-orange-500">
            ★ {stay.rating}
          </span>
        </div>

        <p className="mt-2 text-sm text-gray-500">
          {stay.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {stay.badges.map((badge) => (
            <span
              key={badge}
              className="rounded bg-slate-100 px-3 py-1 text-xs"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="rounded bg-green-100 px-3 py-1 text-xs text-green-700">
            {stay.offer}
          </span>

          <button className="text-sm font-medium text-indigo-600">
            Details →
          </button>
        </div>
      </div>
    </div>
  );
}