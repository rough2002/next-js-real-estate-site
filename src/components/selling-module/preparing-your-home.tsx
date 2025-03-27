import Banner from "../common/banner";
import { Home, Trash2, Wrench } from "lucide-react";

export default function PreparingYourHome() {
  const steps = [
    {
      title: "Decluttering and Depersonalizing",
      description:
        "One of the first steps in preparing your home for sale is decluttering and depersonalizing it. Remove personal items, family photos, and excessive decorations. This allows potential buyers to envision themselves living in the space.",
      icon: <Trash2 className="h-8 w-8 text-teal-500" />, // Using the Trash2 icon
    },
    {
      title: "Necessary Repairs and Updates",
      description:
        "Address any necessary repairs and updates before listing your home. Fix leaky faucets, replace broken tiles, and touch up paint. Consider updating outdated fixtures or appliances to make your home more appealing.",
      icon: <Wrench className="h-8 w-8 text-teal-500" />, // Using the Wrench icon
    },
    {
      title: "Home Staging Tips",
      description:
        "Staging your home can help it sell faster and for a higher price. Arrange furniture to create a spacious and inviting atmosphere. Use neutral colors and decor to appeal to a broad range of buyers. Ensure your home is clean and well-maintained.",
      icon: <Home className="h-8 w-8 text-teal-500" />, // Using the Home icon
    },
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-24 mt-24">
      <Banner
        imageSrc="/images/home-staging.png"
        altText="house image"
        title="Preparing Your Home for Sale"
        description=" Start by decluttering and depersonalizing your home to create a
              neutral space that appeals to buyers. Address any necessary
              repairs, such as fixing leaky faucets and touching up paint.
              Consider staging your home with attractive furniture and decor."
      />

      {/* Steps List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-14">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg"
          >
            <div className="mb-4">{step.icon}</div>
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
