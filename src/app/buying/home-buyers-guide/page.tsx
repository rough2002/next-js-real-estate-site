import BuyerForm from "@/components/buying-module/buyer-form";
// import ConsultationForm from "@/components/buying-module/buying-consulation-form";
import ReviewHome from "@/components/buying-module/review-home";
import ConsultExpert from "@/components/common/consult-expert";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

export default function HomeBuyerGuide() {
  return (
    <>
      <section className="bg-white py-16 px-6 lg:px-24 mt-24 text-lg">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center text-black mb-12">
          New Housing Projects in Nova Scotia
        </h2>
        <Image
          src="/images/house2.png"
          width={500}
          height={400}
          alt="First Time Home Buyers"
          className="w-full rounded mb-6"
        />
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="px-6 lg:px-24 py-6">
            <h1 className="text-3xl font-bold text-center mb-6">
              Your Essential Home Buyer’s Guide
            </h1>
            <p className="text-center mb-8">
              This essential guide will help you unlock the key aspects to
              finding and financing your dream home. It will enable you to
              navigate the home buying process with confidence and ease. By
              using this guide, you will be equipped to make smart, informed
              decisions every step of the way to homeownership.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="p-4 bg-white rounded-lg text-center flex flex-col justify-between">
                <Image
                  src="/images/piggy.jpg"
                  alt="Make Offers and Finalize Purchase"
                  width={200}
                  height={150}
                  className="mx-auto mb-4 rounded"
                />{" "}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Save for Down Payments
                  </h3>
                  <p>
                    Start building your down payment savings to secure better
                    mortgage terms.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-4 bg-white rounded-lg text-center flex flex-col justify-between">
                <Image
                  src="/images/credit-score.jpg"
                  alt="Make Offers and Finalize Purchase"
                  width={200}
                  height={150}
                  className="mx-auto mb-4 rounded"
                />{" "}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Build Credit Score And Income Stability
                  </h3>
                  <p>
                    Improve your credit score and stabilize your income to
                    enhance your loan eligibility.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-4 bg-white rounded-lg text-center flex flex-col justify-between">
                <Image
                  src="/images/affordable.jpg"
                  alt="Make Offers and Finalize Purchase"
                  width={200}
                  height={150}
                  className="mx-auto mb-4 rounded"
                />{" "}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Check for Affordability
                  </h3>
                  <p>
                    Determine what you can afford to ensure a comfortable home
                    buying experience.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-4 bg-white rounded-lg text-center flex flex-col justify-between">
                <Image
                  src="/images/location.jpg"
                  alt="Make Offers and Finalize Purchase"
                  width={200}
                  height={150}
                  className="mx-auto mb-4 rounded"
                />{" "}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Select the Location
                  </h3>
                  <p>
                    Choose a location that fits your lifestyle, future plans and
                    your child’s upbringing.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="p-4 bg-white rounded-lg text-center flex flex-col justify-between">
                <Image
                  src="/images/estimate.jpg"
                  alt="Make Offers and Finalize Purchase"
                  width={200}
                  height={150}
                  className="mx-auto mb-4 rounded"
                />{" "}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Estimate Closing Cost
                  </h3>
                  <p>
                    Calculate all closing costs, including inspections and
                    lawyer fees, to avoid any last-minute surprises.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="p-4 bg-white rounded-lg text-center flex flex-col justify-between">
                <Image
                  src="/images/approved.png"
                  alt="Make Offers and Finalize Purchase"
                  width={200}
                  height={150}
                  className="mx-auto mb-4 rounded"
                />{" "}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Get Pre-approved For Mortgage
                  </h3>
                  <p>
                    Get a mortgage pre-approval & confirm your budget before
                    start looking.
                  </p>
                </div>
              </div>

              {/* Card 7 */}
              <div className="p-4 bg-white rounded-lg text-center flex flex-col justify-between">
                <Image
                  src="/images/agent.png"
                  alt="Make Offers and Finalize Purchase"
                  width={200}
                  height={150}
                  className="mx-auto mb-4 rounded"
                />{" "}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Find A Real Estate Agent
                  </h3>
                  <p>
                    Partner with a knowledgeable real estate agent to guide you
                    through the process.
                  </p>
                </div>
              </div>

              {/* Card 8 */}
              <div className="p-4 bg-white rounded-lg text-center flex flex-col justify-between">
                <Image
                  src="/images/sold.png"
                  alt="Make Offers and Finalize Purchase"
                  width={200}
                  height={150}
                  className="mx-auto mb-4 rounded"
                />{" "}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Make Offers And Finalize Purchase
                  </h3>
                  <p>
                    Make competitive offers and finalize the purchase of your
                    new home.
                  </p>
                </div>
              </div>
            </div>
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
      <ReviewHome />
      {/* <ConsultationForm /> */}
      <div className="bg-black py-12">
        <BuyerForm />
      </div>
    </>
  );
}
