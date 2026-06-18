import {
  User,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export default function AuthStepper({
  currentStep,
}) {
  const steps = [
    {
      label: "Details",
      icon: User,
    },
    {
      label: "Verification",
      icon: ShieldCheck,
    },
    {
      label: "Welcome",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="mx-auto mt-4 flex max-w-xl justify-center">
      <div className="flex items-center">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const active = currentStep >= index + 1;

          return (
            <div
              key={step.label}
              className="flex items-center"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    active
                      ? "bg-violet-600 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  <Icon size={16} />
                </div>

                <span
                  className={`mt-2 text-xs ${
                    active
                      ? "text-violet-600"
                      : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`mx-4 h-[2px] w-24 ${
                    currentStep > index + 1
                      ? "bg-violet-600"
                      : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}