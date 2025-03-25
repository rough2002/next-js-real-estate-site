import { CheckCircle } from "lucide-react";

export default function HowItCanBenefitYou() {
  const benefits = [
    {
      title: "Cut Home Expenses",
      description:
        "Downsizing your home can lead to significantly lower utility bills.",
    },
    {
      title: "Fewer Maintenance",
      description: "Downsizing reduces costs, including cleaning & repairs.",
    },
    {
      title: "Increase Cash Flow",
      description: "Downsizing allows more saving, traveling, or investing.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-24 mt-24">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center text-black mb-6">
        How It Can Benefit You?
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        Transitioning to a smaller home involves planning and organization, but
        the effort pays off. With strategic preparation and mindful design, you
        can downsize effectively while keeping the items that matter most to
        you.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between p-6 border rounded-lg shadow-lg w-full h-full"
          >
            <CheckCircle className="mx-auto text-teal-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-700 text-lg text-center">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
