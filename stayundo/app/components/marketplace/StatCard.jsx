import PropTypes from "prop-types";

export default function StatCard({ value, label, highlight }) {
  return (
    <div className="rounded-2xl bg-[#0f1530] p-5">
      <h3
        className={`text-4xl font-bold ${
          highlight ? "text-emerald-400" : "text-white"
        }`}
      >
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}

StatCard.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
};
