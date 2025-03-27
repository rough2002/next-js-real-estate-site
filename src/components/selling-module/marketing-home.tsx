import { Camera, Globe, Home } from "lucide-react";

export default function MarketingHome() {
  const steps = [
    {
      title: "Professional Photography and Virtual Tours",
      description:
        "High-quality photos and virtual tours are essential for online listings. Professional photography showcases your home in the best light and attracts more potential buyers. Virtual tours allow buyers to explore your home from the comfort of their own.",
      icon: <Camera className="h-8 w-8 text-teal-500" />, // Using the Camera icon
    },
    {
      title: "Online Listings and Social Media",
      description:
        "List your home on popular real estate websites and use social media to reach a wider audience. Online listings should include detailed descriptions, high-quality photos, and virtual tours. Social media platforms like Facebook and Instagram can be used to share your listing and engage with potential buyers.",
      icon: <Globe className="h-8 w-8 text-teal-500" />, // Using the Globe icon
    },
    {
      title: "Open Houses and Private Showings",
      description:
        "Open houses and private showings allow potential buyers to see your home in person. Schedule open houses on weekends to attract more visitors. Be flexible with private showings and ensure your home is always clean and ready for viewing.",
      icon: <Home className="h-8 w-8 text-teal-500" />, // Using the Home icon
    },
  ];

  return (
    <section className="bg-white py-8 px-6 lg:px-24 mt-8">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center text-blue-900 mb-12">
        Marketing Your Home In A Busy Market
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
