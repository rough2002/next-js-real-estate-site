import { UserCheck } from "lucide-react";

export default function HomeSearchSteps() {
  const steps = [
    {
      title: "Step 1",
      description:
        "A comprehensive buyer’s presentation that clearly explains our entire process",
    },
    {
      title: "Step 2",
      description:
        "An in-depth exploration of your wish-list (preferred neighborhood, type of home, quality of finishes, lifestyle preferences) to conduct the most efficient and precise home search",
    },
    {
      title: "Step 3",
      description:
        "A detailed overview of potential costs to help you plan ahead (e.g., legal fees, inspection costs, etc.)",
    },
    {
      title: "Step 4",
      description:
        "A buyer intake session to identify your specific needs and expectations, allowing us to create a uniquely tailored buying plan",
    },
    {
      title: "Step 5",
      description:
        "Defining timeline, outlining our strategy so you always know what to expect and when",
    },
    {
      title: "Step 6",
      description:
        "Ongoing support and updates throughout the buying process, ensuring all your questions are answered and adjustments are made as needed to keep everything on track",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-24 text-lg">
      <div className="flex flex-col lg:flex-row lg:gap-16">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-sm font-bold text-black uppercase mb-4">
            What We Do
          </h3>
          <h2 className="text-3xl lg:text-4xl font-semibold">
            We provide tailored solutions and an enhanced home search strategy,
            that includes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-blue-800 text-white p-3 rounded-md">
                <UserCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">{step.title}</h4>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
