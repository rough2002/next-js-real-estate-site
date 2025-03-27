import ConsultationForm from "@/components/buying-module/buying-consulation-form";
import HomeSearchSteps from "@/components/buying-module/home-search-steps";
import ConsultExpert from "@/components/common/consult-expert";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

export default function BuyingPage() {
  return (
    <>
      <section className="bg-white py-16 px-6 lg:px-24 mt-24">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center text-black mb-2">
          Buy Real Estate In Nova Scotia
        </h2>
        <div className="border-b-2 border-blue-900 w-24 mx-auto mb-12"></div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/images/house-listing.jpg"
              width={500}
              height={350}
              alt="Real Estate Nova Scotia"
              className="object-cover"
            />
          </div>

          <div className="max-w-xl">
            <p className="text-gray-700 text-center lg:text-left text-lg tracking-wider">
              Purchasing a home is a monumental decision, one that requires
              careful consideration and expert guidance. As a top real estate
              agent in Nova Scotia, <b>Jatendar Sachdev</b> is your guide to an
              effortless home purchase. Our mission is to simplify your
              home-buying journey, providing you with unparalleled market
              expertise and crucial information on often-overlooked factors that
              could impact your decision. We are dedicated to securing your
              ideal home at the most competitive price, ensuring a seamless and
              rewarding experience.
            </p>
          </div>
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
      <section className="bg-gray-50 py-16 px-6 lg:px-24 text-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            WE HELP PEOPLE BUY THEIR DREAM HOME
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Home buying can be a stressful process, but we take the guesswork
            out of finding the perfect real estate.
          </p>
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-center  gap-24">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center max-w-sm">
            <Image
              src="/images/house-listing.jpg"
              width={350}
              height={250}
              alt="First Time Home Buyers"
              className="rounded-md shadow-lg"
            />
            <h3 className="font-semibold text-xl mt-4">
              First Time Home Buyer&apos;s
            </h3>
            <p className="text-gray-600 my-3">
              Owning a home offers stability and a sense of accomplishment,
              providing a valuable investment for your future.
            </p>
            <a href="#" className="text-blue-500 font-semibold hover:underline">
              Read More
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center max-w-sm">
            <Image
              src="/images/military-relocation.jpg"
              width={350}
              height={250}
              alt="Military Relocation"
              className="rounded-md shadow-lg"
            />
            <h3 className="font-semibold text-xl mt-4">Military Relocation</h3>
            <p className="text-gray-600 my-3">
              Military relocation often comes with unique challenges; our
              specialized services ensure a smooth and efficient home buying
              process.
            </p>
            <a href="#" className="text-blue-500 font-semibold hover:underline">
              Read More
            </a>
          </div>
        </div>
      </section>
      <HomeSearchSteps />
      <ConsultationForm />
    </>
  );
}
