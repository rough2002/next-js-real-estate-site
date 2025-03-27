import ConsultationForm from "@/components/buying-module/buying-consulation-form";
import ConsultExpert from "@/components/common/consult-expert";
import SlantBanner from "@/components/common/slant-banner";
import MarketingHome from "@/components/selling-module/marketing-home";
import NegotiatingOffers from "@/components/selling-module/negotiating-offers";
import PreparingYourHome from "@/components/selling-module/preparing-your-home";
import SellerForm from "@/components/selling-module/selling-form";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

export default function SellerGuide() {
  const steps = [
    {
      title: "Preparing Your Home for Sale",
      description:
        "Declutter, repair, and stage your home to make it appealing to buyers.",
      imageSrc: "/images/preparing-home.png", // Replace with your image paths
      alt: "Preparing Home for Sale",
      width: 250,
      height: 250,
    },
    {
      title: "Pricing Your Home",
      description:
        "Set a competitive price based on market analysis and conditions.",
      imageSrc: "/images/pricing-home.png", // Replace with your image paths
      alt: "Pricing Your Home",
      width: 350,
      height: 350,
    },
    {
      title: "Marketing Your Home",
      description:
        "Use professional photos, online listings, and social media to attract buyers.",
      imageSrc: "/images/marketing-home.png", // Replace with your image paths
      alt: "Marketing Your Home",
      width: 300,
      height: 300,
    },
    {
      title: "Working with Real Estate Agents",
      description:
        "Hire an experienced agent to guide you through the selling process.",
      imageSrc: "/images/working-with-agents.png", // Replace with your image paths
      alt: "Working with Real Estate Agents",
      width: 350,
      height: 350,
    },
    {
      title: "Negotiating Offers",
      description:
        "Review, compare, and negotiate offers to get the best terms.",
      imageSrc: "/images/nego.png", // Replace with your image paths
      alt: "Negotiating Offers",
      width: 250,
      height: 250,
    },
    {
      title: "Closing the Deal",
      description:
        "Complete inspections, finalize paperwork, and transfer ownership to the buyer.",
      imageSrc: "/images/deal.png", // Replace with your image paths
      alt: "Closing the Deal",
      width: 250,
      height: 250,
    },
  ];

  return (
    <>
      <section className="bg-white py-16 px-6 lg:px-24 mt-24">
        <SlantBanner
          imageSrc="/images/house-listing.jpg"
          altText="house image"
          title="Your Essential Home Seller's Guide"
          description="Selling a home can be both exciting and daunting. Understanding the
          process and what to expect can help reduce stress and ensure a
          successful sale. This guide will walk you through each step, from
          preparing your home to closing the deal."
        />
        <h2 className="text-3xl lg:text-4xl font-semibold text-center text-black mt-16 mb-8">
          Your Essential Home Seller&apos;s Guide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg"
            >
              <div className="mb-4 flex flex-col justify-between h-full">
                <Image
                  src={step.imageSrc}
                  alt={step.alt}
                  width={step.width}
                  height={step.height}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="lg:block hidden">
        <AuroraBackground>
          <ConsultExpert />
        </AuroraBackground>
      </div>
      <div className="lg:hidden">
        <ConsultExpert />
      </div>
      <PreparingYourHome />
      <MarketingHome />
      <ConsultationForm heading="Sell your home with us" />
      <NegotiatingOffers />

      <div className="flex flex-col justify-center items-center gap-6 lg:gap-24 px-6 py-12 lg:px-24 lg:py-20 bg-gray-50 text-lg">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Get a home evaluation with us
          </h2>
        </div>
        <SellerForm />
      </div>
    </>
  );
}
