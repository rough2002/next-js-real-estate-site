import { BookUser } from "lucide-react";

const ReviewHome = () => {
  return (
    <div className="px-6 lg:px-24 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Things to Consider When Viewing Homes Online
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Section 1 */}
        <div className="flex space-x-4 p-4 ">
          <BookUser size={100} className="text-teal-500 !h-10 !w-96 text-xl" />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Review the Photos Thoughtfully
            </h3>
            <p>
              Taking the time to analyze all the photos of a home is essential.
              Pay close attention to the placement of windows and how natural
              light enters different rooms. Visualize how your own furniture
              would fit into each space, especially if the photos show the home
              unfurnished. If the property is staged, consider the layout of the
              furniture and imagine how you might rearrange it to suit your
              personal style and needs. This step helps you envision living in
              the home and ensures it aligns with your practical and aesthetic
              preferences.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex items-start space-x-4 p-4 ">
          <BookUser size={40} className="text-teal-500 !w-96" />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Evaluate the Neighborhood and Community
            </h3>
            <p>
              It&apos;s crucial to assess the neighborhood and community where
              the home is located. Research the local amenities such as schools,
              grocery stores, parks, and recreational facilities. Consider the
              proximity to your workplace or main commuting routes. Take note of
              the overall vibe of the neighborhood—whether it&apos;s quiet and
              family-friendly or vibrant and urban. Understanding the community
              dynamics can help you determine if it aligns with your lifestyle
              and preferences
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex items-start space-x-4 p-4 ">
          <BookUser size={40} className="text-teal-500 !w-96" />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Evaluate the Outdoor Living Spaces
            </h3>
            <p>
              One aspect often overlooked when viewing homes online is the
              outdoor space. Whether it&apos;s a cozy balcony or a spacious
              backyard, outdoor areas are vital to consider virtually. Take note
              of the size and layout of the outdoor space and visualize how you
              would utilize it. Consider factors like furniture arrangements and
              any necessary maintenance such as gardening or snow clearing.
              Understanding the outdoor dynamics ensures the home aligns with
              your lifestyle and provides a comfortable environment throughout
              the year.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex items-start space-x-4 p-4 ">
          <BookUser size={40} className="text-teal-500 !w-96" />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Identify Potential Upgrades and Repairs
            </h3>
            <p>
              When browsing through property listings online, take note of any
              areas that might require upgrades or repairs. Assess which aspects
              of the home appeal to you and which ones you might want to
              renovate in the future. Keep in mind that something as simple as
              changing paint colors can significantly transform the ambiance of
              a home without breaking the bank. Being aware of potential
              improvements allows you to budget and plan accordingly, ensuring
              the home meets your long-term needs and preferences.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4 ">
          <BookUser size={40} className="text-teal-500 !w-96" />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Review the Home&apos;s Energy Efficiency
            </h3>
            <p>
              When browsing through property details, pay attention to the
              home&apos;s energy efficiency features. Look for information on
              insulation, windows, HVAC systems, and energy-efficient
              appliances. A home with good energy efficiency can save you money
              on utility bills in the long run and contribute to a more
              comfortable living environment. If specific details aren&apos;t
              provided, inquire with the seller or real estate agent about the
              home&apos;s energy efficiency ratings or any recent upgrades in
              this regard.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4 ">
          <BookUser size={40} className="text-teal-500 !w-96" />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Assess the Long-Term Resale Potential
            </h3>
            <p>
              Even if you&apos;re purchasing a home with the intention of
              staying for many years, it&apos;s wise to consider its resale
              potential. Look at historical trends in the neighborhood&apos;s
              property values and assess how the home compares to others in the
              area. Factors such as the home&apos;s condition, layout, and
              unique features can influence its resale value. Additionally,
              think about any future developments planned in the area that could
              impact property values positively or negatively. Evaluating the
              long-term resale potential can provide peace of mind and financial
              security as you make your decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewHome;
