import { Clipboard, CheckCircle, Users } from "lucide-react";

export default function NegotiatingOffers() {
  const steps = [
    {
      title: "Reviewing and Comparing Offers",
      description:
        "When you receive offers, review them carefully with your agent. Consider the offer price, contingencies, and closing timeline. Compare multiple offers to determine the best one.",
      icon: <Clipboard className="h-8 w-8 text-teal-500" />, // Clipboard icon
    },
    {
      title: "Counteroffers and Contingencies",
      description:
        "You may need to make counteroffers to negotiate better terms. Common contingencies include home inspections, financing, and appraisal. Work with your agent to navigate these negotiations and protect your interests.",
      icon: <CheckCircle className="h-8 w-8 text-teal-500" />, // CheckCircle icon
    },
    {
      title: "Tips for Successful Negotiation",
      description:
        "Stay flexible and open to compromise during negotiations. Focus on your priorities and be prepared to make concessions. Your agent can help you negotiate effectively and reach a mutually beneficial agreement.",
      icon: <Users className="h-8 w-8 text-teal-500" />, // Users icon
    },
  ];

  return (
    <section className="bg-white py-8 px-6 lg:px-24 mt-8">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center text-blue-900 mb-12">
        Negotiating Offers Along With Your Real Estate Agent
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg"
          >
            <div className="mb-4">
              {step.icon} {/* Displaying the icon */}
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-700 text-lg">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
