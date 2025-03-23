import ConsultationForm from "@/components/buying-module/buying-consulation-form";
import MilitaryBuyerRebates from "@/components/buying-module/military-buyer-rebates";
import ConsultExpert from "@/components/common/consult-expert";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

export default function FirstTimeBuyerGuide() {
  return (
    <>
      <section className="bg-white py-16 px-6 lg:px-24 mt-24 text-lg">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center text-black mb-12">
          Military Relocation Specialist in Nova Scotia
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/images/military-relocation.jpg"
              width={500}
              height={400}
              alt="First Time Home Buyers"
              className="object-cover"
            />
          </div>

          <div className="max-w-lg">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              Military Moves- Relocating Heroes
            </h3>
            <p className="text-gray-600 tracking-wider ">
              Your House Hunting Trip (HHT) is brief, requiring efficient use of
              time. Much can be done before your arrival. We will educate you
              about the HRM area and the buying process, promptly answer any
              questions, and organize viewings and inspections for your HHT.
              With extensive experience handling HHT buyers, our streamlined
              system ensures a hassle-free and successful trip.
            </p>
          </div>
        </div>
      </section>
      <MilitaryBuyerRebates />
      <div className="lg:block hidden">
        <AuroraBackground>
          <ConsultExpert />
        </AuroraBackground>
      </div>
      <div className="lg:hidden">
        <ConsultExpert />
      </div>
      <section className="bg-white py-16 px-6 lg:px-24 mt-24 text-lg">
        <h2 className="text-3xl lg:text-5xl font-semibold text-black mb-12 text-left">
          Nova Scotia Military Relocation Services
        </h2>

        <div className="space-y-6 text-gray-600">
          <p>
            Military relocations to or from Nova Scotia often come with
            significant stress and anxiety, given the complexities of such
            transitions. However, over his extensive tenure in real estate
            services, Samit have had the privilege of assisting numerous members
            of the Canadian Forces through these challenges. With a deep
            understanding of the unique needs and circumstances of military
            families, he strives to make the relocation process as smooth and
            seamless as possible.
          </p>
          <p>
            As a specialist in military relocations, he takes pride in offering
            services tailored to fit your timetable and alleviate the burdens
            associated with moving. Whether you’re relocating to Nova Scotia or
            departing from, his goal is to ensure that your transition is
            stress-free, simple, and expedient. He recognizes the sacrifices and
            commitments made by military service members and their families, and
            he is dedicated to providing the support and assistance needed
            during this critical time.
          </p>
          <p>
            He boasts extensive experience and a profound understanding of the
            challenges inherent in military relocations. He is well-versed in
            navigating the time constraints and logistical complexities that
            often accompany such moves.
          </p>
          <p>
            When you entrust him with your military relocation, he takes the
            responsibility seriously, guiding you through every step of the home
            buying process with care and attention to detail. From assisting
            with moving logistics to providing insights into neighborhood
            features and nearby schools for your children, he prioritizes your
            needs and preferences to ensure a successful transition. His
            comprehensive approach to military relocation services is designed
            to address all aspects of your move, allowing you to focus on
            settling into your new home and community.
          </p>
          <p>
            Jatendar Sachdev believes that military relocations should be more
            than just logistical challenges – they should be opportunities for
            exciting new beginnings. With his dedicated support and personalized
            assistance, he aims to turn your relocation into a positive and
            enjoyable experience. Let him help you embark on this new chapter
            with confidence and peace of mind.
          </p>
        </div>
      </section>

      <ConsultationForm />
    </>
  );
}
