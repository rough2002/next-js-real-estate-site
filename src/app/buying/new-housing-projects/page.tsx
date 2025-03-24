import ConsultationForm from "@/components/buying-module/buying-consulation-form";
import ConsultExpert from "@/components/common/consult-expert";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

export default function FirstTimeBuyerGuide() {
  return (
    <>
      <section className="bg-white py-16 px-6 lg:px-24 mt-24 text-lg">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center text-black mb-12">
          New Housing Projects in Nova Scotia
        </h2>
        <Image
          src="/images/new-housing2.jpg"
          width={500}
          height={400}
          alt="First Time Home Buyers"
          className="w-full rounded mb-6"
        />
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <p className="text-gray-600 tracking-wider">
            Over the last few years, the housing market in Halifax has
            transformed dramatically. Factors like rapid population growth,
            pandemic-related influences, and skyrocketing demand have strained
            the housing supply in Halifax Regional Municipality (HRM). As a
            result, home prices have surged, making affordability a key concern
            for prospective buyers. To combat this, the Nova Scotia government
            is making bold moves. Nine designated Special Planning Areas have
            been approved, paving the way for more than 23,000 new homes to be
            built in the coming years. This development strategy is geared
            towards expanding the housing stock, potentially stabilizing or even
            reducing property prices.
          </p>
        </div>
      </section>
      <div className="px-6 lg:px-24 py-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Choosing the Right Community in Halifax
        </h1>
        <p className="text-center mb-8">
          With many new communities sprouting up across Halifax, picking the
          right one can be overwhelming. Here are some critical factors to
          consider:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg shadow-lg border">
            <h2 className="text-xl font-semibold mb-2">
              Proximity to Amenities
            </h2>
            <p>
              How close is the community to everyday necessities like grocery
              stores, healthcare facilities, and public transport? Families
              should also consider proximity to schools and daycare centers.
              Make sure to ask about future amenities planned within the
              community to get a full picture of what living there will be like.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-lg border">
            <h2 className="text-xl font-semibold mb-2">Stage of Development</h2>
            <p>
              Is the community just starting, or is it already well-established?
              Newer communities offer more options, such as prime lots or corner
              spaces. Meanwhile, mature communities may already have
              well-established amenities, reducing the waiting time for a fully
              functioning neighborhood.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-lg border">
            <h2 className="text-xl font-semibold mb-2">Builder Options</h2>
            <p>
              Different communities have different builders associated with
              them. If you have a preference for a specific home builder, make
              sure they are constructing homes in the community you are eyeing.
              Sometimes, external builders can be brought in, but this depends
              on community regulations.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-lg border">
            <h2 className="text-xl font-semibold mb-2">Physical Location</h2>
            <p>
              Location remains one of the most crucial factors in real estate.
              Consider how the community’s location fits with your lifestyle,
              daily commute, and social activities. While new amenities can be
              developed, the location will always remain fixed.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:block hidden">
        <AuroraBackground>
          <ConsultExpert />
        </AuroraBackground>
      </div>
      <div className="lg:hidden">
        <ConsultExpert />
      </div>
      <div className="px-6 lg:px-24 py-6 mt-16 mb-12">
        <h1 className="text-3xl font-bold text-center mb-6">
          Exploring New and Established Communities in Halifax
        </h1>
        <p className="text-center mb-8">
          Halifax and its surrounding areas are home to several exciting
          community developments. Whether you’re looking for a serene lakeside
          view or proximity to downtown amenities, there’s something for
          everyone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Oakfield Woods</h2>
            <p>
              Close to Grand Lake and golf courses, featuring spacious
              single-family homes starting in the mid-$500,000s.
            </p>
          </div>
          <div className="bg-gray-50 border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Parks of West Bedford
            </h2>
            <p>
              Offers a variety of home sizes and styles, surrounded by natural
              beauty and modern amenities.
            </p>
          </div>
          <div className="bg-gray-50 border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Indigo Shores</h2>
            <p>
              Lakefront community with expansive wooded and waterfront lots,
              offering a peaceful lifestyle just 25 minutes from downtown
              Halifax.
            </p>
          </div>
          <div className="bg-gray-50 border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Kingswood North</h2>
            <p>
              A tranquil residential area surrounded by lush forests, located
              between Bedford and Sackville.
            </p>
          </div>
          <div className="bg-gray-50 border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Rockingham South</h2>
            <p>
              Centrally located with scenic views of Halifax Harbour, combining
              urban convenience with a suburban feel.
            </p>
          </div>
          <div className="bg-gray-50 border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              The Links at Brunello
            </h2>
            <p>
              A unique blend of golf community and residential living, only 15
              minutes from downtown Halifax.
            </p>
          </div>
        </div>
      </div>
      <ConsultationForm />
    </>
  );
}
