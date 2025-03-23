import BuyerForm from "@/components/buying-module/buyer-form";
import BuyingSteps from "@/components/buying-module/buying-steps";
import HomeBuyerRebates from "@/components/buying-module/home-buyer-rebates";
import ConsultExpert from "@/components/common/consult-expert";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

export default function FirstTimeBuyerGuide() {
  return (
    <>
      <section className="bg-white py-16 px-6 lg:px-24 mt-24 text-lg">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center text-black mb-12">
          First Time Home Buyer&apos;s Guide
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/images/house-listing.jpg"
              width={500}
              height={400}
              alt="First Time Home Buyers"
              className="object-cover"
            />
          </div>

          <div className="max-w-lg">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              Buy Your First Home in Nova Scotia
            </h3>
            <p className="text-gray-600 tracking-wider">
              First-time homebuyers often grapple with determining their needs
              and desires in a home to make the right spending decisions.
              Location, infrastructure, and cost of living are key factors to
              prioritize when searching for a house to purchase.
            </p>
          </div>
        </div>
      </section>
      <HomeBuyerRebates />
      <div className="lg:block hidden">
        <AuroraBackground>
          <ConsultExpert />
        </AuroraBackground>
      </div>
      <div className="lg:hidden">
        <ConsultExpert />
      </div>
      <BuyingSteps />
      <div className="bg-black py-12">
        <BuyerForm />
      </div>
    </>
  );
}
