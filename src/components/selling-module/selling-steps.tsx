import { UserCheck } from "lucide-react";

export default function SellingSteps() {
  const steps = [
    {
      title: "Initial Consultation",
      description:
        "The first step in selling your property is to schedule an initial consultation. During this meeting, I will assess your property, discuss your goals, and outline the selling process. This is also an opportunity for you to ask any questions and learn more about how I can help you achieve a successful sale.",
    },
    {
      title: "Property Valuation",
      description:
        "Accurate pricing is crucial to attracting buyers and achieving a timely sale. I will conduct a thorough market analysis to determine the optimal listing price for your property. This valuation considers recent sales of similar properties, current market conditions, and unique features of your home.",
    },
    {
      title: "Preparing Your Property",
      description:
        "First impressions matter. I will provide recommendations on how to prepare your property for sale, including staging tips, minor repairs, and enhancements that can increase its appeal and value. If needed, I can connect you with trusted professionals who can assist with these preparations.",
    },
    {
      title: "Showings and Open Houses",
      description:
        "I will coordinate and manage all showings and open houses, ensuring your property is presented in the best possible light. I handle all inquiries and follow up with potential buyers to gauge their interest and obtain feedback.",
    },
    {
      title: "Negotiations",
      description:
        "When offers start coming in, I will review each one with you, providing expert advice on how to proceed. My negotiation skills are focused on securing the best possible price and terms for you. I will keep you informed throughout the process and handle all negotiations professionally.",
    },
    {
      title: "Closing the Sale",
      description:
        "Once we have accepted an offer, I will guide you through the closing process, ensuring all necessary paperwork is completed accurately and efficiently. My goal is to make the closing process as smooth and stress-free as possible, so you can focus on your next steps.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-24 text-lg">
      <div className="flex flex-col lg:flex-row lg:gap-16">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-sm font-bold text-black uppercase mb-4">
            What I Do
          </h3>
          <h2 className="text-3xl lg:text-4xl font-semibold">
            The Selling Process
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
