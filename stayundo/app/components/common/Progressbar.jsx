export default function Progressbar({steps}) {
  return (
    <div className="mx-auto mt-4 flex max-w-lg items-center justify-center">
      <div className="flex items-center">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    step.active
                      ? "bg-violet-600 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  <Icon size={16} />
                </div>

                <span
                  className={`mt-2 text-xs ${
                    step.active ? "text-violet-600" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className={`mx-4 h-[2px] w-24 ${steps[index + 1]?.active ? "bg-violet-600" : "bg-gray-200"}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
