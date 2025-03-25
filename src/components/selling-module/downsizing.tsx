import Image from "next/image";

export default function DownsizingOptions() {
  return (
    <section className="bg-white py-16 px-6 lg:px-24 mt-24">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center text-black mb-6">
        Downsizing Options
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        When thinking about downsizing, it’s essential to realize that there are
        multiple approaches you can take, each with its own set of advantages
        and disadvantages. Understanding these options will help you choose the
        one that best matches your personality, needs, and lifestyle.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* New Neighbourhoods */}
        <div className="text-center p-6 border rounded-lg shadow-lg flex flex-col justify-between">
          <div className="mb-4">
            <Image
              src="/images/neighbour.png"
              alt="New Neighbourhoods"
              width={200}
              height={200}
              className="mx-auto object-cover rounded"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              New Neighbourhoods
            </h3>
            <p className="text-gray-700 text-lg">
              Choosing a different neighborhood can bring a fresh start and
              potentially better amenities or a closer community. It involves
              adapting to a new environment.
            </p>
          </div>
        </div>

        {/* Buy A Small House */}
        <div className="text-center p-6 border rounded-lg shadow-lg flex flex-col justify-between">
          <div className="mb-4">
            <Image
              src="/images/small-house.png"
              alt="Buy A Small House"
              width={100}
              height={100}
              className="mx-auto object-cover rounded"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Buy A Small House
            </h3>
            <p className="text-gray-700 text-lg">
              This is the most traditional form of downsizing. It can reduce
              your maintenance responsibilities and lower your utility costs,
              but it might also mean giving up some space and comfort.
            </p>
          </div>
        </div>

        {/* Buying A Condo */}
        <div className="text-center p-6 border rounded-lg shadow-lg flex flex-col justify-between">
          <div className="mb-4">
            <Image
              src="/images/condo.png"
              alt="Buying A Condo"
              width={100}
              height={100}
              className="mx-auto object-cover rounded"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Buying A Condo
            </h3>
            <p className="text-gray-700 text-lg">
              Condos can offer a low-maintenance lifestyle with amenities like
              gyms and pools, as well as a sense of community. The trade-off is
              dealing with condo association fees and rules.
            </p>
          </div>
        </div>

        {/* Retirement Homes */}
        <div className="text-center p-6 border rounded-lg shadow-lg flex flex-col justify-between">
          <div className="mb-4">
            <Image
              src="/images/retirement.png"
              alt="Retirement Homes"
              width={100}
              height={100}
              className="mx-auto object-cover rounded"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Retirement Homes
            </h3>
            <p className="text-gray-700 text-lg">
              These communities offer social opportunities and amenities
              specifically designed for older adults. The downside is that they
              can be expensive and might have strict rules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
