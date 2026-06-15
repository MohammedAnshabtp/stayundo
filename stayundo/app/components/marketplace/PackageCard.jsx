import PropTypes from "prop-types";

export default function PackageCard({
  icon,
  title,
  description,
  price,
  oldPrice,
  featured = false,
  badge,
}) {
  return (
    <div
      className={`rounded-3xl p-6 shadow-sm transition hover:shadow-lg ${
        featured
          ? "bg-indigo-600 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            featured
              ? "bg-white/20 text-white"
              : "bg-violet-100 text-violet-600"
          }`}
        >
          {icon}
        </div>

        {badge && (
          <span className="rounded-full bg-green-400 px-3 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-3xl font-bold">{title}</h3>

      <p
        className={`mt-3 text-sm ${
          featured ? "text-indigo-100" : "text-slate-500"
        }`}
      >
        {description}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <span className="text-4xl font-bold">{price}</span>

        <span
          className={`text-sm line-through ${
            featured ? "text-indigo-200" : "text-slate-400"
          }`}
        >
          {oldPrice}
        </span>
      </div>

      <button
        className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition ${
          featured
            ? "bg-white text-indigo-600 hover:bg-gray-100"
            : "border border-violet-400 text-violet-600 hover:bg-violet-50"
        }`}
      >
        Order Bundle
      </button>
    </div>
  );
}

PackageCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string,
  featured: PropTypes.bool,
  badge: PropTypes.string,
};