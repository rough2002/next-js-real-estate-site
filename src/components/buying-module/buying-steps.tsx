import {
  User,
  List,
  CreditCard,
  Search,
  Home,
  CheckCircle,
  Package,
} from "lucide-react";

const FirstTimeHomeBuyersGuide = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-24 mt-24 text-lg">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center text-black mb-12">
        Things To Remember For First Time Home Buyers
      </h2>

      <div className="space-y-12">
        {/* Step 1 */}
        <div className="flex items-start space-x-4">
          <User className=" text-blue-600" size={32} />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Work With Jatendar Sachdev Your Realtor
            </h3>
            <p className="text-gray-600">
              A realtor is an invaluable asset in researching and inspecting
              properties. Work with Jatendar Sachdev to ensure a smooth and
              enjoyable home-buying experience.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start space-x-4">
          <List className=" text-green-600" size={32} />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              List Your Preferences
            </h3>
            <p className="text-gray-600">
              While searching for a property, you’ll realize you can’t have
              everything you want. It’s important to differentiate between your
              essential needs and desirable features. This helps in making
              informed decisions and setting realistic expectations.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start space-x-4">
          <CreditCard className=" text-yellow-600" size={32} />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Pre-Approval for a Mortgage
            </h3>
            <p className="text-gray-600">
              Before starting your home search, obtain a pre-approval from a
              licensed mortgage broker. This pre-approval allows you to lock in
              your interest rate for up to 120 days and clearly defines your
              budget, ensuring you focus on homes within your financial reach.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start space-x-4">
          <Search className=" text-red-600" size={32} />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Down Payment and Closing Costs
            </h3>
            <p className="text-gray-600">
              As a first-time homebuyer, you can leverage your RRSP as a free
              loan for your down payment. When you consult with your mortgage
              broker, they will provide detailed guidance on the amount of money
              required for closing costs. These expenses are necessary for
              completing the transaction.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex items-start space-x-4">
          <Home className=" text-teal-600" size={32} />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Find Your Dream Home
            </h3>
            <p className="text-gray-600">
              Start your house hunting by browsing listings online, visiting
              open houses, and scheduling private showings. Work closely with
              your realtor to narrow down your options.
            </p>
          </div>
        </div>

        {/* Step 6 */}
        <div className="flex items-start space-x-4">
          <CheckCircle className=" text-purple-600" size={32} />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Make an Offer
            </h3>
            <p className="text-gray-600">
              When you find the right home, you’ll make an offer and may
              negotiate on price, closing dates, or other details. A realtor can
              assist you during this process.
            </p>
          </div>
        </div>

        {/* Step 7 */}
        <div className="flex items-start space-x-4">
          <Package className=" text-orange-600" size={32} />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Close the Deal
            </h3>
            <p className="text-gray-600">
              This is the final step. You’ll sign the legal papers to transfer
              ownership and handle remaining financial details like the down
              payment and closing costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstTimeHomeBuyersGuide;
