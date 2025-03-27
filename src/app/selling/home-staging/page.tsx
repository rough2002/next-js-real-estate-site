import {
  AnimatedText,
  fadeInUpVariants,
} from "@/components/animated-components";
import ConsultationForm from "@/components/buying-module/buying-consulation-form";
import ConsultExpert from "@/components/common/consult-expert";
import StagingInfo from "@/components/selling-module/staging-info";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

export default function HomeStaging() {
  return (
    <>
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        {/* <div className="absolute inset-0 w-full h-full bg-cover bg-center"> */}
        <Image
          src="/images/home-staging.png"
          layout="fill"
          objectFit="cover"
          alt="Real Estate Nova Scotia"
          className="brightness-50"
        />
        {/* </div> */}

        {/* Text on top of the image */}
        <div className="relative z-10 text-center border-b-2 white rounded">
          <AnimatedText
            className="text-3xl lg:text-5xl font-semibold text-white shadow-md mb-2"
            initial={true ? "hidden" : "visible"}
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Home Staging Services
          </AnimatedText>
        </div>
      </section>
      <section className="bg-white py-16 px-6 lg:px-24">
        <p className="text-gray-700 text-lg">
          Creating a positive first impression is crucial to attract a broad
          range of buyers, as many start forming opinions about a home within
          moments of seeing it. That’s why it’s essential to captivate them from
          the moment they approach your front door. {"\n \n"}Our personalized
          home staging services focus on crafting harmony, flow, balance, and
          symmetry with carefully selected furnishings and accessories to give
          your home that unforgettable wow factor. We collaborate closely with
          you to offer customized solutions tailored to your needs and budget,
          ensuring that staging is a worthwhile investment leading to a
          successful sale.
        </p>
      </section>

      <div className="lg:block hidden">
        <AuroraBackground>
          <ConsultExpert />
        </AuroraBackground>
      </div>
      <div className="lg:hidden">
        <ConsultExpert />
      </div>
      <StagingInfo />
      <ConsultationForm heading="Consult regarding Home Staging" />
    </>
  );
}
