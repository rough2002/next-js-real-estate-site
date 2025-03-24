import {
  AnimatedText,
  fadeInUpVariants,
} from "@/components/animated-components";
import ConsultExpert from "@/components/common/consult-expert";
import SellerForm from "@/components/selling-module/selling-form";
import SellingSteps from "@/components/selling-module/selling-steps";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

export default function BuyingPage() {
  return (
    <>
      <section className="relative bg-white py-16 px-6 lg:px-24 mt-24">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center">
          <Image
            src="/images/nova-scotia.png"
            layout="fill"
            objectFit="cover"
            alt="Real Estate Nova Scotia"
            className="brightness-50"
          />
        </div>

        {/* Text on top of the image */}
        <div className="relative z-10 text-center border-b-2 white rounded">
          <AnimatedText
            className="text-3xl lg:text-5xl font-semibold text-white shadow-md mb-2"
            initial={true ? "hidden" : "visible"}
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Sell Your Nova Scotia Real Estate
          </AnimatedText>
        </div>
      </section>
      <section className="bg-white py-16 px-6 lg:px-24 mt-24">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center text-black mb-2">
          Top Areas Served in Nova Scotia
        </h2>
        <div className="border-b-2 border-blue-900 w-24 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Area 1 */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-900">Halifax</h3>
            <p className="text-gray-700 text-lg">
              Halifax is a vibrant city with a strong real estate market.
              Whether you&apos;re selling a condo downtown or a family home in
              the suburbs, I have the experience to navigate this competitive
              market and find the right buyers.
            </p>
          </div>

          {/* Area 2 */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-900">Bedford</h3>
            <p className="text-gray-700 text-lg">
              Bedford offers a mix of urban convenience and suburban charm. I
              can help you market your Bedford property to highlight its unique
              advantages, attracting buyers who are looking for the perfect
              balance of lifestyle and location.
            </p>
          </div>

          {/* Area 3 */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-900">Sackville</h3>
            <p className="text-gray-700 text-lg">
              Sackville&apos;s affordable housing and community spirit make it a
              sought-after area for families and first-time buyers. I will
              highlight these features to draw interest and achieve a successful
              sale.
            </p>
          </div>

          {/* Area 4 */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-900">Timberlea</h3>
            <p className="text-gray-700 text-lg">
              With its scenic landscapes and quiet neighborhoods, Timberlea
              appeals to those seeking a peaceful lifestyle. I will showcase the
              beauty and tranquility of your Timberlea property to the right
              audience.
            </p>
          </div>

          {/* Area 5 */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-900">Dartmouth</h3>
            <p className="text-gray-700 text-lg">
              Known for its waterfront views and growing community, Dartmouth is
              an attractive area for many buyers. I will leverage my local
              knowledge to position your property as a prime opportunity in this
              desirable market.
            </p>
          </div>

          {/* Area 6 */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-900">Truro</h3>
            <p className="text-gray-700 text-lg">
              Truro&apos;s unique charm and natural beauty attract buyers from
              near and far. I will use my expertise to market your property
              effectively, emphasizing its appeal to potential buyers looking
              for a piece of this picturesque region in NS.
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
      <SellingSteps />
      <div className="bg-gray-50 py-12">
        <SellerForm />
      </div>
    </>
  );
}
