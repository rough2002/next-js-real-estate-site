import ConsultationForm from "@/components/buying-module/buying-consulation-form";
import ConsultExpert from "@/components/common/consult-expert";
import HowItCanBenefitYou from "@/components/selling-module/benifits";
import DownsizingOptions from "@/components/selling-module/downsizing";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

export default function BuyingPage() {
  return (
    <>
      <section className="bg-white py-16 px-6 lg:px-24 mt-24 text-lg">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center text-black mb-12">
          Downsizing/ Resizing Your Home
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/images/resizing.png"
              width={500}
              height={400}
              alt="First Time Home Buyers"
              className="object-cover"
            />
          </div>

          <div className="max-w-lg">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              Get help form experts
            </h3>
            <p className="text-gray-600 tracking-wider ">
              Downsizing/resizing your home is not just about reducing space;
              it&apos;s about enhancing your lifestyle. Let&apos;s find the
              perfect fit for your new, simplified living.
            </p>
          </div>
        </div>
      </section>
      <HowItCanBenefitYou />
      <div className="lg:block hidden">
        <AuroraBackground>
          <ConsultExpert />
        </AuroraBackground>
      </div>
      <div className="lg:hidden">
        <ConsultExpert />
      </div>
      <DownsizingOptions />
      <ConsultationForm heading="Book Consultation for Downsizing" />
    </>
  );
}
